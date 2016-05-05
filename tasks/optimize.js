'use strict'

const htmlMinify = require('html-minifier').minify
const cheerio = require('cheerio')
const Smallector = require('smallector')
const fs = require('fs')
const path = require('path')
const smear = require('smear')
const thenify = require('thenify')
const fsReadFile = thenify(fs.readFile)
const fsWriteFile = thenify(fs.writeFile)
const fsReadOptions = {encoding: 'utf-8'}
const postcss = require('postcss')
const byebye = require('css-byebye')
const nano = require('cssnano')
const endsWith = require('lodash.endswith')
const pseudosRegex = /:?(:[a-z-]+)/g

module.exports = function minifyHTML (dest) {
  return Promise.all([
    fsReadFile(path.join(dest, 'app.css'), fsReadOptions)
    .then(function (css) {
      return postcss.parse(css)
    }),
    fsReadFile(path.join(dest, 'icons.svg'), fsReadOptions)
    .then(function (icons) {
      return cheerio.load(icons)
    })
  ])
  .then(smear(function (css, icons) {
    return fsReadFile(path.join(dest, 'index.html'))
    .then(function (html) {
      return cheerio.load(html)
    })
    .then(function ($) {
      const unused = []
      const ignore = ['.flash']
      var output

      trav(css.nodes)

      output = new Smallector(postcss(byebye({ rulesToRemove: unused })).process(css).css, { compress: true })

      $('[class]').each(function () {
        var classes = $(this).attr('class').split(' ')

        classes = classes.map(function (v, k) {
          if (output.map[v]) {
            return output.map[v]
          }
        })

        $(this).attr('class', classes.join(' ') || null)
      })

      ignore.forEach(function (v) {
        if (output.map[v.substr(1)]) {
          output.compiled = output.compiled.replace(new RegExp('\\.' + output.map[v.substr(1)] + '([^\\w-])', 'g'), v + '$1')
        }
      })

      return postcss([nano()]).process(output.compiled).then(function (output) {
        $('head').find('[rel=stylesheet]').replaceWith(`<style type="text/css">${output.css}</style>`)

        return $
      })

      function trav (nodes) {
        nodes.forEach(function (node) {
          if (!endsWith(node.parent.name, 'keyframes')) {
            if (node.selector) {
              node.selector
                .split(',')
                .map(function (selector) {
                  return selector.trim()
                })
                .forEach(function (selector) {
                  var _selector = selector.replace(pseudosRegex, function (selector, pseudo) {
                    return pseudo === ':not' ? selector : ''
                  })

                  if (_selector && ignore.indexOf(_selector) < 0 && !$(_selector).length) {
                    unused.push(selector)
                  }
                })
            }
          }

          if (node.nodes) {
            trav(node.nodes)
          }
        })
      }
    })
    .then(function ($) {
      const defs = new Set()

      $('use').each(function () {
        const href = $(this).attr('xlink:href')

        if (href.indexOf('#') > -1) {
          const id = href.substring(href.indexOf('#') + 1)
          const classes = $(this).parent().attr('class')

          if ($(`use[xlink\\:href="${href}"], use[xlink\\:href="#${id}"]`).length > 1) {
            $(this).attr('xlink:href', '#' + id)
            defs.add(id)
          } else {
            let cloned = icons('#' + id).clone()

            cloned.attr('class', classes)
            cloned.attr('id', null)
            cloned.attr('width', null)
            cloned.attr('height', null)
            cloned.attr('fill', null)

            $(this).parent().replaceWith(cloned)
          }
        }
      })

      if (defs.size) {
        const paths = []

        for (let id of defs) {
          const el = icons('#' + id).clone()
          const children = el.children()

          if (children.length > 1) {
            paths.push(`<g id="${id}">${el.html()}</g>`)
          } else {
            children.attr('id', id)

            paths.push(el.html())
          }
        }

        $('body').append(`<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>${paths.join('')}</defs></svg>`)
      }

      return $
    })
    .then(function ($) {
      return fsReadFile(path.join(dest, 'app.js'))
      .then(function (js) {
        $('body').find('script').replaceWith(`<script>${js}</script>`)

        return $
      })
    })
    .then(function ($) {
      return fsWriteFile(path.join(dest, 'index.html'), htmlMinify($.html(), {
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        // removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        minifyJS: true
      }))
    })
  }))
}

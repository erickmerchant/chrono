'use strict'

const cheerio = require('gulp-cheerio')
const geomicons = require('geomicons-open/paths')
const vinylFS = require('vinyl-fs')

module.exports = function icons (done) {
  vinylFS.src('./index.html')
    .pipe(cheerio(function ($) {
      const defs = new Set()
      const paths = []

      $('use').each(function () {
        const href = $(this).attr('xlink:href')
        const id = href.substring(1)

        if ($(`use[xlink\\:href="${ href }"]`).length > 1) {
          defs.add(id)
        } else {
          $(this).replaceWith(`<path d="${ geomicons[id] }"/>`)
        }
      })

      if (defs.size) {
        for (let id of defs) {
          paths.push(`<path d="${ geomicons[id] }" id="${ id }"/>`)
        }

        $('body').append(`<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs>${ paths.join('') }</defs></svg>`)
      }
    }))
    .pipe(vinylFS.dest('./'))
    .on('end', done)
}
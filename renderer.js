const component = require('./js/component.js')
const next = () => {}

module.exports = function (render) {
  render('build/200.html', 'body', function (save) {
    save('build/renders/break.html', component({state: 300000, next}))
  })

  render('build/200.html', 'body', function (save) {
    save('build/renders/work.html', component({state: 1500000, next}))
  })

  render('build/200.html', 'body', function (save) {
    save('build/renders/reset.html', component({state: 0, next}))
  })
}

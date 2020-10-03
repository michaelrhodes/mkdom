module.exports = mkdom

var dom = require('domino')
var core = require('./core')

function mkdom (html) {
  var ctx = dom.createWindow()
  return /^\s*<(!doctype|html)/i.test(html) ?
   ((ctx.document.documentElement.innerHTML = html), ctx.document) :
    core.call(ctx, html)
}

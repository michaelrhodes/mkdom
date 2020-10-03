module.exports = mkdom

var domino = require('domino')
var core = require('./core')

function mkdom (html) {
  var ctx = domino.createWindow()
  return /^\s*<(!doctype|html)/i.test(html) ?
   ((ctx.document.documentElement.innerHTML = html), ctx.document) :
    core.call(ctx, html)
}

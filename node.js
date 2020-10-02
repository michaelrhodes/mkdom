module.exports = mkdom

var domino = require('domino')
var core = require('./core')
var ctx = domino.createWindow()

function mkdom (html) {
  return /^\s*<(!doctype|html)/i.test(html) ?
    ((ctx.document.documentElement.innerHTML = html), ctx.document) :
    core.call(ctx, html)
}

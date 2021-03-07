module.exports = mkdom

var linkedom = require('linkedom')
var core = require('./core')

var dom = new linkedom.DOMParser

function mkdom (html) {
  return /^\s*<(!doctype|html)/i.test(html) ?
    dom.parseFromString(html, 'text/html') :
    core.call(dom.parseFromString('', 'text/html').defaultView, html)
}

module.exports = mkdom

var dom = new DOMParser
var core = require('./core')

function mkdom (html) {
  return /^\s*<(!doctype|html)/i.test(html) ?
    dom.parseFromString(html, 'text/html') :
    core(html)
}

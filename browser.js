module.exports = mkdom

var core = require('./core')

var dom = new DOMParser

function mkdom (html) {
  return /^\s*<(!doctype|html)/i.test(html) ?
    dom.parseFromString(html, 'text/html') :
    core(html)
}

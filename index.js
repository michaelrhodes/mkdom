var domino = require('domino')

var full = /^\s*<(!doctype|html)/i
var node = typeof document !== 'object'
var doc = node ? domino.createDocument() : document

module.exports = mkdom

function mkdom (html) {
  // Enable use as a tag function
  if (html.raw) html = String.raw.apply(String, arguments)

  // Remove any surrounding plain text
  html = html.replace(/(^[^<]*|[^>]*$)/g, '')

  // Full pages need their own document object
  return node && full.test(html) ?
    domino.createDocument(html) :
    partial(html, doc)
}

function partial (html, doc) {
  var tpl = doc.createElement('template')
  var el = (tpl.innerHTML = html) && tpl.content
  return el.childNodes.length > 1 ? el : el.childNodes[0]
}

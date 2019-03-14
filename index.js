var domino = require('domino')
var wrap = require('./wrap')

var full = /^\s*<(!doctype|html)/i
var node = typeof document !== 'object'
var doc = node ? domino.createDocument() : document

module.exports = mkdom

function mkdom (html) {
  // Enable use as a tag function
  if (html.raw) return mkdom(String.raw.apply(String, arguments))

  // Remove any surrounding plain text
  html = html.replace(/(^[^<]*|[^>]*$)/, '')

  // Full pages need their own document object
  return node && full.test(html) ?
    domino.createDocument(html) :
    partial(html, doc)
}

function partial (html, doc) {
  // Wrap elements that cannot otherwise
  // be created via innerHTML assignment
  var w = wrap(html)

  var el = doc.createElement('div')
  el.innerHTML = w ? w.html : html

  // Return loose elements inside wrapper
  var child = el.childNodes
  var i = 0, l = child.length
  for (var c = 0; i < l; i++)
    if (child[i].nodeType === 3 && ++c > 1)
      return el

  // Return enclosed elements without wrapper
  el = el.firstChild
  if (w) while (w.depth--) el = el.firstChild
  return el
}

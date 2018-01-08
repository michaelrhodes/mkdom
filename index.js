var domino = require('domino')
var wrap = require('./wrap')

var complete = /^\s*<(!doctype|html)/i
var browser = typeof document == 'object'
var doc = browser ? document : domino.createDocument()

module.exports = mkdom

function mkdom (html) {
  // Remove any surrounding plain text
  html = html.replace(/(^[^<]*|[^>]*$)/, '')

  return !browser && complete.test(html) ?
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
    if (child[i].nodeType == 3 && ++c > 1)
      return el

  // Return enclosed elements without wrapper
  el = el.firstChild
  if (w) while (w.depth--) el = el.firstChild
  return el
}

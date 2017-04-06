var domino = require('domino')
var map = {
  option: [1, '<select multiple="multiple">', '</select>'],
  optgroup: [1, '<select multiple="multiple">', '</select>'],
  legend: [1, '<fieldset>', '</fieldset>'],
  thead: [1, '<table>', '</table>'],
  tbody: [1, '<table>', '</table>'],
  tfoot: [1, '<table>', '</table>'],
  colgroup: [1, '<table>', '</table>'],
  caption: [1, '<table>', '</table>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
  th: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  _default: [0, '', '']
}

var server = typeof document === 'undefined'
var doc = server ? domino.createDocument() : document

module.exports = mkdom

function mkdom (html) {
  var dom = {}
  if (server) dom = domino.createDocument(html)
  return dom.doctype ? dom : shared(html, doc)
}

function shared (html, document) {
  html = html.replace(/(^[^<]*|[^>]*$)/, '')
  var tag = (html.match(/^<([a-z]+)/i) || []).slice(1)[0]
  var wrap = map[tag] || map._default
  var depth = wrap[0]
  var prefix = wrap[1]
  var suffix = wrap[2]

  html = prefix + html + suffix

  var dom = document.createElement('div')
  dom.innerHTML = html

  // Return loose elements inside wrapper
  var children = dom.childNodes
  var elementCount = 0
  for (var i = 0, l = children.length; i < l; i++)
    if (children[i].nodeType == 3 && ++elementCount > 1)
      return dom

  // Return enclosed elements without wrapper
  var element = dom.firstChild
  while (depth--) element = element.firstChild
  return element
}

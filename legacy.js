module.exports = mkdom

var dom = new DOMParser

// The HTML representations of elements specified in the
// wrapmap cannot be converted into DOM nodes unless they
// are represented as children of their respective parents

var wrapmap = {
  td: [3, '<table>', '</table>'],
  th: [3, '<table>', '</table>'],
  tr: [2, '<table>', '</table>'],
  thead: [1, '<table>', '</table>'],
  tbody: [1, '<table>', '</table>'],
  tfoot: [1, '<table>', '</table>'],
  caption: [1, '<table>', '</table>'],
  colgroup: [1, '<table>', '</table>']
}

function mkdom (html) {
  var wrapped = wrap(html = (html || '').trim())
  var doc = dom.parseFromString(wrapped ? wrapped.html : html, 'text/html')
  var head = doc.head.childNodes.length
  var body = doc.body.childNodes.length
  if (head && body) return doc

  var el = body ? doc.body : doc.head
  var fragment = doc.createDocumentFragment()
  var length = el.childNodes.length

  if (wrapped) {
    el = el.firstChild
    while (wrapped.depth--) el = el.firstChild
    return el
  }

  if (length === 1) return el.childNodes[0]
  while (length--) fragment.appendChild(el.childNodes[0])
  return fragment
}

function wrap (html, w) {
  return (w = wrapmap[(html.match(/^<([a-z]+)/i) || [])[1]]) && {
    depth: w[0], html: w[1] + html + w[2]
  }
}

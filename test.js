var tape = require('tape')
var mkdom = require('./')

tape('complete document', function (t) {
  var element = mkdom('<!doctype html>\n<html>\n  <head>\n    <title>Complete document</title>\n  </head>\n  <body>\n    <p class="introduction">This is the introduction.</p>\n  </body>\n</html>\n')

  var title = element.querySelector('title')
  var intro = element.querySelector('p')

  t.equal(text(title), 'Complete document', 'title matches')
  t.equal(text(intro), 'This is the introduction.', 'intro matches')

  t.end()
})

tape('partial document', function (t) {
  var element = mkdom('<div class="wrapper">\n  <h1>Heading 1</h1>\n  <p>Paragraph</p>\n</div>\n')

  var title = 'The title'
  var copy = 'This <em>is</em> the copy'

  var h1 = element.getElementsByTagName('h1')[0]
  var p = element.getElementsByTagName('p')[0]

  text(h1, title)
  p.innerHTML = copy

  t.equal(title, text(h1), 'title matches')
  t.equal(
    normalise(copy),
    normalise(p.innerHTML),
    'copy matches'
  )
  t.end()
})

tape('document interoperability', function (t) {
  var expected = normalise(
    '<ul><li><strong>Goodbye</strong></li></ul>'
  )
  var list = mkdom('<ul></ul>')
  var item = mkdom('<li><strong>Hello</strong></li>')

  list.appendChild(item)
  text(item.getElementsByTagName('strong')[0], 'Goodbye')

  var result = normalise(list.outerHTML)
  t.equal(result, expected, 'items merged')
  t.end()
})

tape('elements that once needed wrapping no longer do', function (t) {
  var row = mkdom('<tr><td>Dog</td></tr>')
  t.equal(row.getElementsByTagName('td')[0].innerHTML, 'Dog')
  t.end()
})

tape('it always returns a dom node', function (t) {
  var fragment = mkdom()
  t.equal(fragment.nodeType, 11)
  t.end()
})

// Old IE does uppercase element
// names and adds return characters
function normalise (string) {
  return string.toLowerCase()
    .replace(/\n|\r/g, '')
}

function text (element, content) {
  var property = element.textContent === void 0 ?
    'innerText' : 'textContent'
  if (content) element[property] = content
  return element[property]
}

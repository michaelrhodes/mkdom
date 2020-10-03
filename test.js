var assert = require('dexy/assert')
var mkdom = require('./')

// Full document
dom = mkdom('<!doctype html>\n<html>\n  <head>\n    <title>Complete document</title>\n  </head>\n  <body>\n    <p class="introduction">This is the introduction.</p>\n  </body>\n</html>\n')
title = dom.querySelector('title')
intro = dom.querySelector('p')

assert('title matches', title.textContent, 'Complete document')
assert('intro matches', intro.textContent, 'This is the introduction.')

// Partial document
dom = mkdom('<div class="wrapper">\n  <h1>Heading 1</h1>\n  <p>Paragraph</p>\n</div>\n')
h1 = dom.getElementsByTagName('h1')[0]
p = dom.getElementsByTagName('p')[0]

h1.textContent = title = 'The title'
p.innerHTML = copy = 'This <em>is</em> the copy'

assert('title matches', h1.textContent, title)
assert('copy matches', p.innerHTML, copy)

// Document interoperability
list = mkdom('<ul></ul>')
item = mkdom('<li><strong>Hello</strong></li>')
strong = item.getElementsByTagName('strong')[0]
strong.textContent = 'Goodbye'
list.appendChild(item)

expected = '<ul><li><strong>Goodbye</strong></li></ul>'
assert('items merged', list.outerHTML, expected)

// Final thoughts
dom = mkdom('<tr><td>Dog</td></tr>')
assert('it unwraps', dom.getElementsByTagName('td')[0].textContent, 'Dog')

dom = mkdom()
assert('is document fragment', dom.nodeType, dom.DOCUMENT_FRAGMENT_NODE)

var run = require('tape').test

var text = function(element, content) {
  var property = !!element.textContent ?
    'textContent' : 'innerText'
  element[property] = content || element[property]
  return element[property]
}

module.exports = function(mkdom) {

  run('complete document', function (test) {
    var element = mkdom('<!doctype html>\n<html>\n  <head>\n    <title>Complete document</title>\n  </head>\n  <body>\n    <p class="introduction">This is the introduction.</p>\n  </body>\n</html>\n')
    
    var title = element.getElementsByTagName('title')[0]
    var intro = element.getElementsByTagName('p')[0]

    test.equal(text(title), 'Complete document', 'title matches')
    test.equal(text(intro), 'This is the introduction.', 'intro matches')

    test.end()
  })

  run('partial document', function (test) {
    var element = mkdom('<div class="wrapper">\n  <h1>Heading 1</h1>\n  <p>Paragraph</p>\n</div>\n')

    var title = 'The title'
    var copy = 'This <em>is</em> the copy'
    
    var h1 = element.getElementsByTagName('h1')[0]
    var p = element.getElementsByTagName('p')[0]
    
    text(h1, title)
    p.innerHTML = copy
    
    test.equal(title, text(h1), 'title matches')
    test.equal(copy, p.innerHTML, 'copy matches')

    test.end()   
  })

  run('document interoperability', function(test) {
    var expected = '<ul><li><strong>Goodbye</strong></li></ul>'
    var list = mkdom('<ul></ul>')
    var item = mkdom('<li><strong>Hello</strong></li>')

    list.appendChild(item)
    text(item.getElementsByTagName('strong')[0], 'Goodbye')

    test.equal(list.parentNode.innerHTML, expected, 'items merged')
    test.end()
  })

}

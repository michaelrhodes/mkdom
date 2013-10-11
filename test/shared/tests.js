var run = require('tape').test

module.exports = function(mkdom) {

  run('complete document', function (test) {
    var element = mkdom('<!doctype html>\n<html>\n  <head>\n    <title>Complete document</title>\n  </head>\n  <body>\n    <p class="introduction">This is the introduction.</p>\n  </body>\n</html>\n')
    
    var title = element.querySelector('title').textContent 
    var intro = element.querySelector('.introduction').textContent

    test.equal(title, 'Complete document', 'title matches')
    test.equal(intro, 'This is the introduction.', 'intro matches')

    test.end()
  })

  run('partial document', function (test) {
    var element = mkdom('<div class="wrapper">\n  <h1>Heading 1</h1>\n  <p>Paragraph</p>\n</div>\n')

    var title = 'The title'
    var copy = 'This <em>is</em> the copy'
    
    var h1 = element.querySelector('h1')
    var p = element.querySelector('p')
    
    h1.textContent = title
    p.innerHTML = copy
    
    test.equal(title, h1.textContent, 'title matches')
    test.equal(copy, p.innerHTML, 'copy matches')

    test.end()   
  })

  run('document interoperability', function(test) {
    var expected = '<ul><li><strong>Hello</strong></li></ul>'
    var list = mkdom('<ul></ul>')
    var item = mkdom('<li><strong>Hello</strong></li>')

    list.appendChild(item)
    
    test.equal(list.outerHTML, expected, 'items merged')
    test.end()
  })

}

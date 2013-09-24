module.exports = function(run, domify) {

  run('complete document', function (test) {
    var dom = domify('<!doctype html>\n<html>\n  <head>\n    <title>Complete document</title>\n  </head>\n  <body>\n    <p class="introduction">This is the introduction.</p>\n  </body>\n</html>\n')
    
    var title = dom.querySelector('title').textContent 
    var intro = dom.querySelector('.introduction').textContent

    test.equal(title, 'Complete document', 'title matches')
    test.equal(intro, 'This is the introduction.', 'intro matches')

    test.end()
  })

  run('partial document', function (test) {
    var dom = domify('<div class="wrapper">\n  <h1>Heading 1</h1>\n  <p>Paragraph</p>\n</div>\n')

    var title = 'The title'
    var copy = 'This <em>is</em> the copy'
    
    var h1 = dom.querySelector('h1')
    var p = dom.querySelector('p')
    
    h1.textContent = title
    p.innerHTML = copy
    
    test.equal(title, h1.textContent, 'title matches')
    test.equal(copy, p.innerHTML, 'copy matches')

    test.end()   
  })

}

var fs = require('fs')

module.exports = function(run, domify) {

  run('complete document', function (test) {
    var html = fs.readFileSync('../shared/complete.html', 'utf-8')
    var dom = domify(html)
    
    var title = dom.querySelector('title').textContent 
    var intro = dom.querySelector('.introduction').textContent

    test.equal(title, 'Complete document', 'title matches')
    test.equal(intro, 'This is the introduction.', 'intro matches')

    test.end()
  })

  run('partial document', function (test) {
    var html = fs.readFileSync('../shared/partial.html', 'utf-8')
    var dom = domify(html)

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

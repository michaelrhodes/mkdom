var fs = require('fs')
var benchmark = require('benchmark')
var mkdom = require('./')

var readme = fs.readFileSync('./fixtures/readme.html').toString()

benchmark.Suite()
  .add('partial', function () {
    mkdom('<strong>test</strong>')
  })
  .add('partial (wrapped)', function () {
    mkdom('<tr><td>test</td></tr>')
  })
  .add('document', function () {
    mkdom(readme)
  })
  .on('error', error)
  .on('cycle', cycle)
  .run()

function error (e) {
  console.error(e.target.error.stack)
}

function cycle (e) {
  console.log(String(e.target))
}

var shared = require('./shared')
var domino = require('domino')
var document = domino.createDocument()

var mkdom = function(html) {
  var dom = domino.createDocument(html)

  // Return full documents as is
  return dom.doctype ? dom :
    shared(html, document)
}

module.exports = mkdom

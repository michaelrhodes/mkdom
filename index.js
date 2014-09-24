var shared = require('./shared')
var domino = require('domino')
var document = domino.createDocument()

var mkdom = function(html) {
  if (!(this instanceof mkdom)) {
    return new mkdom(html)
  }

  var dom = domino.createDocument(html)

  // Return full documents as is
  if (dom.doctype) {
    return dom
  }

  return shared(html, document)
}

module.exports = mkdom

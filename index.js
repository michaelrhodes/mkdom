var shared = require('./shared')
var jsdom = require('jsdom').jsdom
var document = (function(dom) {
  return jsdom().parentWindow.window.document
})()

var mkdom = function(html) {
  if (!(this instanceof mkdom)) {
    return new mkdom(html)
  }
  var dom = jsdom(html)

  // Return full documents as is
  if (dom.doctype) {
    document = dom.parentWindow.window.document
    return document
  }

  return shared(html, document)
}

module.exports = mkdom

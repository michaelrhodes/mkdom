var jsdom = require('jsdom').jsdom

var document = function(dom) {
  return dom.parentWindow.window.document
}

module.exports = function(html) {
  var dom = jsdom(html)

  // Return full documents as is
  if (dom.doctype) {
    return document(dom)
  }

  // This wrapping works around a jsdom bug
  // that prevented partial documents from
  // having access to querySelector
  html = '<html>' + html + '</html>'
  dom = jsdom(html)

  // Return loose elements inside <html> wrapper
  var children = dom.childNodes
  var elementCount = 0
  for (var i = 0, l = children.length; i < l; i++)
    if (children[i].nodeType === 3 && ++elementCount > 1)
      return document(dom).documentElement
 
  // Return enclosed elements without <html> wrapper
  return document(dom).documentElement.firstChild 
}

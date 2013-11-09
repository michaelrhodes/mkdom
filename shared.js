module.exports = function(html, document) {
  // Custom nodeName ‘cause we can.
  dom = document.createElement('mkdom')
  dom.innerHTML = html

  // Return loose elements inside <domify> wrapper
  var children = dom.childNodes
  var elementCount = 0
  for (var i = 0, l = children.length; i < l; i++)
    if (children[i].nodeType == 3 && ++elementCount > 1)
      return dom

  // Return enclosed elements without <domify> wrapper
  return dom.firstChild
}

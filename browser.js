module.exports = mkdom
module.exports.window = window
module.exports.document = document

function mkdom (html) {
  if (html == null) html = ''

  // Enable use as a tag function
  if (html.raw) html = String.raw.apply(String, arguments)

  html = html.trim()

  var tpl = document.createElement('template')
  var el = (tpl.innerHTML = html) && tpl.content
  return !el ? document.createDocumentFragment() : (
    el.childNodes.length > 1 ? el :
    el.childNodes[0]
  )
}

module.exports = mkdom

function mkdom (html) {
  // Enable use as a tag function
  if (html.raw) html = String.raw.apply(String, arguments)

  html = html.trim()

  var tpl = document.createElement('template')
  var el = (tpl.innerHTML = html) && tpl.content
  return el.childNodes.length > 1 ? el : el.childNodes[0]
}

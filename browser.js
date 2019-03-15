module.exports = mkdom

function mkdom (html) {
  // Enable use as a tag function
  if (html.raw) html = String.raw.apply(String, arguments)

  // Remove any surrounding plain text
  html = html.replace(/(^[^<]*|[^>]*$)/g, '')

  var tpl = document.createElement('template')
  var el = (tpl.innerHTML = html) && tpl.content
  return el.childNodes.length > 1 ? el : el.childNodes[0]
}

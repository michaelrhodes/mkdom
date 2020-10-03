module.exports = mkdom

function mkdom (html) {
  var t = this.document.createElement('template')
  var c = ((t.innerHTML = (html || '').trim()), t.content)
  return (c.childNodes.length === 1 ? c.childNodes[0] : c).cloneNode(true)
}

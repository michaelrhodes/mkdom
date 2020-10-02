module.exports = mkdom

function mkdom (html, t, c) {
  t = this.document.createElement('template')
  c = ((t.innerHTML = (html || '').trim()), t.content)
  return (c.childNodes.length === 1 ? c.childNodes[0] : c).cloneNode(true)
}

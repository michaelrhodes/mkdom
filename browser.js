var shared = require('./shared')
module.exports = function(html) {
  return shared(html, document)
}

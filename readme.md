# domlin
domlin converts plain HTML into DOM elements that can be manipulated in browsers and on the server. It makes writing shared rendering logic fairly easy.

[![Build status](https://travis-ci.org/michaelrhodes/domlin.png?branch=master)](https://travis-ci.org/michaelrhodes/domlin)

[![Browser support](https://ci.testling.com/michaelrhodes/domlin.png)](https://ci.testling.com/michaelrhodes/domlin)

## Install
```
npm install domlin
```

### Example
``` js
var fs = require('fs')
var dom = require('domlin')
var html = fs.readFileSync('./templates/readme.html')

var page = dom(html)
page.querySelector('h1').textContent = 'domlin'
page.querySelector('p').textContent = 'domlin converts pl…'

process.stdout.write(page.outerHTML)
```

#### Note
On the server, when you run a full document (doctype, etc) through domlin, the returned object will have split the doctype out into a property. This means when it comes time to output the html, you’ll need to write `dom.doctype + dom.outerHTML`.

### License
[MIT](http://opensource.org/licenses/MIT)

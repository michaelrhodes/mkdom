# mkdom
mkdom converts HTML into DOM elements in browsers and on the server. It makes writing shared rendering logic fairly easy.

[![Build status](https://travis-ci.org/michaelrhodes/mkdom.svg?branch=master)](https://travis-ci.org/michaelrhodes/mkdom)

[![Browser support](https://ci.testling.com/michaelrhodes/mkdom.png)](https://ci.testling.com/michaelrhodes/mkdom)

## install
```
npm install mkdom
```

### use
``` js
var fs = require('fs')
var mkdom = require('mkdom')
var html = fs.readFileSync('./templates/readme.html')

var page = mkdom(html)
page.querySelector('h1').textContent = 'mkdom'
page.querySelector('p').textContent = 'mkdom converts pl…'

process.stdout.write(page.outerHTML)
```

### obey
[MIT](http://opensource.org/licenses/MIT)

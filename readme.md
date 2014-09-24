# mkdom
mkdom converts plain HTML into DOM elements that can be manipulated in browsers and on the server. It makes writing shared rendering logic fairly easy.

[![Build status](https://travis-ci.org/michaelrhodes/mkdom.png?branch=master)](https://travis-ci.org/michaelrhodes/mkdom)

[![Browser support](https://ci.testling.com/michaelrhodes/mkdom.png)](https://ci.testling.com/michaelrhodes/mkdom)

## Install
```
npm install mkdom
```

### Example
``` js
var fs = require('fs')
var mkdom = require('mkdom')
var html = fs.readFileSync('./templates/readme.html')

var page = mkdom(html)
page.querySelector('h1').textContent = 'mkdom'
page.querySelector('p').textContent = 'mkdom converts pl…'

process.stdout.write(page.outerHTML)
```

You can also take a look at a more real world example, [mkdom-todos](https://github.com/michaelrhodes/mkdom-todos).

### License
[MIT](http://opensource.org/licenses/MIT)

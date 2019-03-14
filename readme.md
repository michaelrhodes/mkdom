# mkdom
isomorphic html → dom

[![build status](https://travis-ci.org/michaelrhodes/mkdom.svg?branch=master)](https://travis-ci.org/michaelrhodes/mkdom)

[![browser support](https://ci.testling.com/michaelrhodes/mkdom.png)](https://ci.testling.com/michaelrhodes/mkdom)

## install
```
npm install michaelrhodes/mkdom#1.1.1
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

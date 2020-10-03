# mkdom
isomorphic html → dom

[![ci](https://travis-ci.org/michaelrhodes/mkdom.svg?branch=master)](https://travis-ci.org/michaelrhodes/mkdom)

## install
```
npm install https://pkg.mkr.sx/mkdom/2.0.0.tgz
```

*note*: in non-browser environments you’ll also need to install [domino](https://github.com/fgnass/domino)

## use
``` js
var fs = require('fs')
var mkdom = require('mkdom')
var html = fs.readFileSync('./templates/readme.html')

var page = mkdom(html)
page.querySelector('h1').textContent = 'mkdom'
page.querySelector('p').textContent = 'mkdom converts pl…'

process.stdout.write(page.outerHTML)
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)

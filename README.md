# xml element string

[![npm](https://img.shields.io/npm/v/xml-element-string.svg?style=flat-square)](https://www.npmjs.com/package/xml-element-string)
[![Travis](https://img.shields.io/travis/tracespace/xml-element-string.svg?style=flat-square)](https://travis-ci.org/tracespace/xml-element-string)
[![Coveralls](https://img.shields.io/coveralls/tracespace/xml-element-string.svg?style=flat-square)](https://coveralls.io/github/tracespace/xml-element-string)
[![David](https://img.shields.io/david/tracespace/xml-element-string.svg?style=flat-square)](https://david-dm.org/tracespace/xml-element-string)
[![David](https://img.shields.io/david/dev/tracespace/xml-element-string.svg?style=flat-square)](https://david-dm.org/tracespace/xml-element-string#info=devDependencies)

Takes a tag-name, attributes object, and an array of children and turns them into an xml string.

## usage

```
$ npm install --save xml-element-string
```

then

``` js
var createElement = require('xml-element-string')
var element = createElement(tagName, optionalAttributesObject, optionalChildArray)
```

## example

``` js
var createElement = require('xml-element-string')

var element = createElement('hello', {from: 'the'}, [
  createElement('other', {side: 'I'}),
  createElement('must', {have: 'called'}, [
    createElement('a', {thousand: 'times'})
  ])
])

console.log(element)
// logs
// <hello from="the"><other side="I"/><must have="called"><a thousand="times"/></must></hello>
```

## features

Not much going on here, but this module will:

* Close or self-close the nodes as necessary
* Ignore attributes that resolve to `null` or `undefined`
* Escape html characters in the tag, attribute names, and attribute values by way of [escape-html](https://github.com/component/escape-html)

## developing and contributing

Clone and then `$ npm install`. Please accompany all PRs with applicable tests. Please test your code in browsers, as Travis CI cannot run browser tests for PRs.

### unit testing

This module uses [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/) for unit testing, [Istanbul](https://github.com/gotwarlost/istanbul) for coverage, and [ESLint](http://eslint.org/) for linting.

* `$ npm test` - run the tests, calculate coverage, and lint
* `$ npm run test:watch` - run the tests on code changes (does not lint nor cover)
* `$ npm run lint` - lint the code (will be run as a pre-commit script)

### browser testing

Browser tests are run with [Zuul](https://github.com/defunctzombie/zuul) and [Sauce Labs](https://saucelabs.com/opensauce/) on the last two versions of Chrome, Firefox, Safari, and Internet Explorer as well as the latest version of Edge.

* `$ npm run test:browser` - run the unit tests in a local browser
* `$ npm run test:sauce` - run the units tests in several browsers using Open Sauce (Sauce Labs account and local [.zuulrc](https://github.com/defunctzombie/zuul/wiki/Zuulrc) required)

<img src="http://bitcore.io/css/images/module-message.png" alt="sharecore message" height="35">
# Sharecoin Message Verification and Signing for Sharecore


[![NPM Package](https://img.shields.io/npm/v/sharecore-message.svg?style=flat-square)](https://www.npmjs.org/package/sharecore-message)
[![Build Status](https://img.shields.io/travis/hutlim/sharecore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/hutlim/sharecore-message)
[![Coverage Status](https://img.shields.io/coveralls/hutlim/sharecore-message.svg?style=flat-square)](https://coveralls.io/r/hutlim/sharecore-message?branch=master)

sharecore-message adds support for verifying and signing sharecoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main sharecore repo](https://github.com/hutlim/sharecore) for more information.

## Getting Started

```sh
npm install sharecore-message
```

```sh
bower install sharecore-message
```

To sign a message:

```javascript
var sharecore = require('sharecore-lib');
var Message = require('sharecore-message');

var privateKey = sharecore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/hutlim/sharecore/blob/master/CONTRIBUTING.md) on the main sharecore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/hutlim/sharecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Sharecoin Core Developers


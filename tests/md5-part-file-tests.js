'use strict';

var assert = require('assert');
var md5pf = require('../');

// Tests
md5pf('./LICENSE', 50, 10, function(err, hash){
  assert.equal(hash, 'cc1bd880c91f7a894b50768ba378f1e5');
});

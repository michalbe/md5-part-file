'use strict';

var crypto = require('crypto');
var fs = require('fs');
var md5sum = crypto.createHash('md5');

var md5pf = function(file, start, end, cb) {
  var length = end - start;
  var buffer = new Buffer(length);
  fs.open(file, 'r', function(err, fd) {
    if (err){
      console.log(err);
      return;
    }
    fs.read(fd, buffer, 0, length, 0, function() {
      md5sum.update(buffer);
      cb(md5sum.digest('hex'));
    });
  });
};


md5pf('README.md', 0, 1024, function(hash){
  console.log('hash', hash);
});

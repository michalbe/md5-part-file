'use strict';

var md5 = require('md5-o-matic');
var fs = require('fs');

var md5pf = function(file, start, end, cb) {
  var length = end - start;
  var buffer = new Buffer(length);
  fs.open(file, 'r', function(err, fd) {
    if (err){
      console.log(err);
      return;
    }
    fs.read(fd, buffer, 0, length, 0, function(){
      cb(md5(buffer.toString()));
    });
  });
};


md5pf('README.md', 0, 1023, function(hash){
  console.log('hash', hash);
});

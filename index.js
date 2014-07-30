'use strict';

var crypto = require('crypto');
var fs = require('fs');

module.exports = function(file, start, end, cb) {
  var md5sum = crypto.createHash('md5');
  var length = end - start;
  var buffer = new Buffer(length);
  fs.open(file, 'r', function(err, fd) {
    if (err){
      console.log(err);
      return;
    }
    fs.read(fd, buffer, 0, length, 0, function(err, bufferLength) {
      if (err){
        console.log(err);
        return;
      }
      md5sum.update(buffer.toString('utf-8', 0, bufferLength));
      fs.close(fd, function(){
        cb(md5sum.digest('hex'));
      });
    });
  });
};

'use strict';

var crypto = require('crypto');
var fs = require('fs');

module.exports = function(file, start, end, cb) {
  var md5sum = crypto.createHash('md5');
  // calculate length of the chunk
  var length = end - start;
  // create new buffer to write chunk to
  var buffer = new Buffer(length);
  // open a file in 'read' mode
  fs.open(file, 'r', function(err, fd) {
    if (err){
      cb(err);
      return;
    }
    // read given number of bytes and write to the buffer
    fs.read(fd, buffer, 0, length, 0, function(err, bufferLength) {
      if (err){
        cb(err);
        return;
      }
      // file could be smaller than number of bytes we are interested in, so
      // truncate the buffer and calculate MD5 hash from the truncated part
      if (bufferLength < length) {
        md5sum.update(buffer.toString('utf-8', 0, bufferLength));
      } else {
        md5sum.update(buffer);
      }
      fs.close(fd, function() {
        // return proper hash to callback
        cb(null, md5sum.digest('hex'));
      });
    });
  });
};

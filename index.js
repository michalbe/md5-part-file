'use strict';

var crypto = require('crypto');
var rpf = require('read-part-file');

module.exports = function(file, start, length, cb) {
  var md5sum = crypto.createHash('md5');
  // calculate length of the chunk
  rpf(file, start, length, function(err,result) {
    if (err) {
      cb(err);
      return;
    }

    md5sum.update(result);
    cb(null, md5sum.digest('hex'));

  });
};

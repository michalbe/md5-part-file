# md5-part-file by [@michalbe](http://github.com/michalbe) #
Calculate md5 hash of only part of the file

### How to use: ###
```
npm install md5-part-file
```
then:
```javascript
var md5pf = require('md5-part-file');

// Arguments are: filename, first byte, last byte, callback
md5pf('filename', 0, 1024, function(err, result) {
  console.log(result); // 788567c42aa94359406a8119b450d3ac
});
```

Thanks [@mmalecki](http://github.com/mmalecki) for help.

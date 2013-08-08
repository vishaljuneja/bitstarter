var fs = require('fs');
var buf = new Buffer(fs.readFileSync('index.html'));
console.log(buf.toString('utf8'));

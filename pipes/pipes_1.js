// require fs

const fs = require('fs');

// invoke createReadstream
const readStream = fs.createReadStream('./file1.txt');

// pipe from readable stream to writable stream.
readStream.pipe(fs.createWriteStream('./file2.txt'));

// this how v pipe the data read from readable stream to writable stream

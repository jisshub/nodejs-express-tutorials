const http = require('https');
const fs = require('fs');

// creatreadstream'
const readFileStream = fs.createReadStream('./file.txt', 'utf8');

// createwriterstream
const writeFileStream = fs.createWriteStream('./file_2.txt');

//
readFileStream.on('data', (chunk) => {
  // write that chcunk of data to new file
  writeFileStream.write(chunk, (err) => {
    if (err) {
      throw err;
    }
    console.log('data written');
  });
});

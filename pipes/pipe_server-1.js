// require packages

const fs = require('fs');
const http = require('http');

// create a server
server = http.createServer((req, res) => {
  // write the headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // create a read stream,
  const readme = fs.createReadStream('./file1.txt', 'utf8');
  // pipe the stream to res stream
  readme.pipe(res);
});
server.listen(5000, () => {
  console.log('App listening on port 5000!');
});

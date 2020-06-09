const fs = require('fs');
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
  // write the header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // create a readble stream
  const readStream = fs.createReadStream('./file1.txt');
  // pipe data from readable stream to response stream
  readStream.pipe(res);
});

// set a port
const PORT = 5000;

// listen to the port
server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listening on PORT ' + PORT);
});

// here piped data is seen in localhost:5000. snce v sent the response data to client

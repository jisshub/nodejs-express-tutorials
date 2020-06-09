// readable streams

const http = require('https');

// require fs module
const fs = require('fs');

// create a read stream, use createReadStream

const fileReadStream = fs.createReadStream('./file.txt', 'utf-8');

// so here node reads a small chunk of data over the time - put that data to buffer
// once buffer fills up - data is passed to the client.

// call on() - listen to event "data" means when any chunk of data is recieved, fire the funciton attavjed to "data" event.

fileReadStream.on('data', (chunk) => {
  console.log('new chunk recieved');
  console.log(chunk);
});

// benefit is client dont have to wait all data to be recieved at a time.
// memory effieicient - since all data is stored to the meory at a time.

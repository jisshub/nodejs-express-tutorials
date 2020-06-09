# require

#### exports.js

```javascript
const getPen = (penName) => {
  return 'my pen is' + penName;
};

const getArr = [
  { name: 'strange', powers: ['a', 'b'] },
  { name: 'thor', powers: ['c', 'd'] },
];

// exporting mutliple modules

module.exports = {
  getPen,
  getArr,
};

// module.exports is an object - pass the xports to it.
```

#### import.js

```javascript
// require all exports
const allExports = require('./exports');
// access the getPen funciton
console.log(allExports.getPen('pinpoint'));
// access the getArra
console.log(allExports.getArr);
```

## module patterns

#### exports.js

```javascript
function books(bookObj) {
  return bookObj;
}

function avengers(listOfAv) {
  listOfAv.forEach((element) => {
    console.log(element);
  });
}

module.exports = {
  books,
  avengers,
};
```

#### import.js

---

```javascript
const getAll = require('./export1');

const bookObj = {
  bookName: 'asdsad',
  bookAuthor: 'sdas',
  pages: 100000,
};
console.log(getAll.books(bookObj));

getAll.avengers(['thor', 'doctor strange']);
```

## Events Module- Event EMItter

```javascript
// require EventEmitter from evens modeule.
const EventEmitter = require('events');

// create an Event Emitetr object
const emitter = new EventEmitter();

// invoke on() - on EventEmitter object
emitter.on('event', (msg) => {
  console.log(msg);
});

// when event emitter object emits an event. - pass msg as second argument
//  - function attached to that event is fired.
emitter.emit('event', 'event was emitted');
```

## reading and writing to a file

### fs modoule

```javascript
// require fs module
const fs = require('fs');

// reading a file
fs.readFile('../app.js', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// writing to a file in nodejs
const data = 'jomon';
fs.writeFile('./sample/file.txt', data, (err) => {
  if (err) {
    throw err;
  }
  console.log('content written');
});

// appending to a file
const newData = 'hell nodejs';
fs.appendFile('./sample/sample_1.txt', newData, (err) => {
  if (err) {
    return err;
  }
  console.log('Data Appended');
});
```

## create - remove - directories

```javascript
// erequire fs module

const fs = require('fs');

// mkdir - create a directory

fs.mkdir('./outputs/dir2', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('new directory created!');
  }
});

// removing a directory

fs.rmdir('./outputs/dir1', (err) => {
  if (err) {
    throw err;
  }
  console.log('directory removed');
});
```

### streams

## readable streams

writable stream - allow node to write data to a stream
readable stream - allow node to read data from a stream

- when v send data to client - v r sending response to the client -> writable stream.

- if node receives/reads data from somewhere -> readable stream. for eg: reading a file.

```javascript
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
```

## writable stream

- first v read chunk of data from file. when receieve a chunk of data fires a fucniton where v rite that chunk of data to new file using createWriteStream.

- so each time a new chunk of data is read and later that chink of data is written to a file.

#### example

```javascript
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
```

## pipes in node

- takes data from a readstream and pipes that data to a write stream.

- using pipes - no need to manually listen for
  the 'data' event to occur - also not have to manually write to a file using writestream

- pipes does that for us.

* use pipe() on readable stream not writable stream . since we are piping from a readable stream to a writable stream.

### example

```javascript
// require fs

const fs = require('fs');

// invoke createReadstream
const readStream = fs.createReadStream('./file1.txt');

// pipe from readable stream to writable stream.
readStream.pipe(fs.createWriteStream('./file2.txt'));

// this how v pipe the data read from readable stream to writable stream
```

## pipe the data and sent the data to the client as response

```javascript
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
```

### explanation

- create a server - write the headers -set statuscode, content-type of data
- create a readable stream - pipe that data to response stream.
- finally, listen to PORT 5000.

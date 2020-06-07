
# require

#### exports.js

```javascript
const getPen = (penName) => {
    return "my pen is" + penName
};

const getArr = [
    {"name": "strange", powers: ["a", "b"]},
    {"name": "thor", powers: ["c", "d"]}
];


// exporting mutliple modules

module.exports = {
    getPen,
    getArr
}

// module.exports is an object - pass the xports to it.

```

#### import.js

```javascript

// require all exports
const allExports = require("./exports");
// access the getPen funciton
console.log(allExports.getPen("pinpoint"));
// access the getArra
console.log(allExports.getArr);


```

## module patterns

#### exports.js

```javascript

function books(bookObj) {
    return bookObj
}



function avengers(listOfAv) {
    listOfAv.forEach(element => {
        console.log(element)
    });
}


module.exports = {
    books,
    avengers
}

```

#### import.js
------------

```javascript

const getAll = require("./export1");

const bookObj = {
    "bookName": "asdsad",
    "bookAuthor": "sdas",
    "pages": 100000
};
console.log(getAll.books(bookObj));

getAll.avengers(["thor", 'doctor strange']);


```
## Events Module- Event EMItter

``` javascript

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
emitter.emit('event', "event was emitted");

 ```

## reading and writing to a file

### fs modoule

```javascript
    // require fs module
const fs = require("fs");

// reading a file
fs.readFile('../app.js', 'utf8', (err, data)=> {
    if (err) {
        throw err;
    }
    console.log(data);
    
});


// writing to a file in nodejs
const data = "jomon";
fs.writeFile("./sample/file.txt", data, (err) => {
    if (err) {
        throw err;
    }
    console.log("content written");
    
});


// appending to a file
const newData = "hell nodejs"
fs.appendFile("./sample/sample_1.txt", newData, (err) => {
    if (err){
        return err;
    }
    console.log("Data Appended");
});


```


## create - remove - directories

``` javascript

// erequire fs module

const fs =require("fs");

// mkdir - create a directory

fs.mkdir("./outputs/dir2", (err) => {
    if (err) {
        throw err;
    }
    else{
        console.log("new directory created!");
        
    }
})


// removing a directory

fs.rmdir('./outputs/dir1', (err)=> {
    if (err) {
        throw err;
    }
    console.log("directory removed");
});


```

# require

### exports.js

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

## import.js
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




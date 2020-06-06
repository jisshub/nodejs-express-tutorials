const getAll = require("./export1");

const bookObj = {
    "bookName": "asdsad",
    "bookAuthor": "sdas",
    "pages": 100000
};
console.log(getAll.books(bookObj));

getAll.avengers(["thor", 'doctor strange']);


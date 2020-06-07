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

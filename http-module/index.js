// practice -2

const myServer = require("http");

myServer.createServer((req,res) => {
    res.write("hello all welcome!");
    res.end();
}).listen(5000, "localhost", (err) => {
    if (err) {
        throw err;
    }
    console.log("hello");
    
})

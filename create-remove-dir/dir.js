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


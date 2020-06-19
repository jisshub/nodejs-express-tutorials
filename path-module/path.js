const path = require("path");

// 
console.log(path.dirname('/'));

// returns filename
console.log(path.basename("./path.js"));

// get extension
console.log(path.extname("./path.js"));

// joining paths
console.log(path.join(path.dirname('./'), 'newdir', 'sample', 'base.html'));

// 
console.log(path.dirname("./test-dir"));

// create a path object
console.log(path.parse('./path.js'))


// 
console.log(path.dirname('./test-dir/new-dir'));

// get the file extension using parse()
path.parse(filename).ext;


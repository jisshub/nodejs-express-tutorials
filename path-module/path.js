const path = require("path");

// 
console.log(path.dirname('/'));

// returns filename
console.log(path.basename("./path.js"));

// get extension
console.log(path.extname("./path.js"));

// joining paths
console.log(path.join(path.dirname('./'), 'newdir', 'sample', 'base.html'));

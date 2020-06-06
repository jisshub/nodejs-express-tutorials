// globals
// --------------------



setTimeout(()=> {
    console.log("hello node");    
}, 5000);


let time = 1;
const interval =  setInterval(()=>{
    time += 2;
    console.log(`${time} has passed`);
    if (time > 7) {
        // clear the interval once time is above 7
        clearInterval(interval)
    }
}, 3000);


// get the dir name
console.log(__dirname);
// get the filename
console.log(__filename);




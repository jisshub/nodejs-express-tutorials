// create a url object - use URL class
const myUrl = new URL("https://www.helloworld.com?movie=batman&year=2018");

console.log(myUrl);

// get full url
console.log(myUrl.href);

// get hostname
console.log(myUrl.hostname);

// get serach query,
console.log(myUrl.search);

// get search params object
console.log((myUrl.searchParams));



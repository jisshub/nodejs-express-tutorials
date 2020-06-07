const moviesFunc = (moviesArr) =>{
    moviesArr.forEach(element => {
        console.log(element);
    });
};

function getArea(l, b) {
    return l*b;
}

module.exports = {
    moviesFunc,
    getArea
}
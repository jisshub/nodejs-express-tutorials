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



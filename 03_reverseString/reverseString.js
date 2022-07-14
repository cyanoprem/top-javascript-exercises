const reverseString = function(text) {
    let Arr = text.split("");
    Arr = Arr.reverse();
    text = Arr.join("");
    return text;
};

// Do not edit below this line
module.exports = reverseString;

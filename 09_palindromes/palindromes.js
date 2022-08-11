const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9]/g, '');
    string = string.toLowerCase();
    reverseString = string.split("").reverse().join("");
    if (string === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

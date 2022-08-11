const fibonacci = function (a) {
    a = parseInt(a);
    let previous = 1;
    let current = 1;
    if (a < 0) {
        return "OOPS"
    } else if (a == 1 || a == 2) {
        return 1;
    } 
    else {
        for (i=3; i<=a; i++) {
            let temp = current;
            current += previous;
            previous = temp;
        }
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;


/*

1 -> 1
2 -> 1+1 = 2
3 -> 2+1 = 3
4 -> 3+3 = 5
5 -> 5+3 = 8

*/

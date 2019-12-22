/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    for (let i = 1; i <= (x / 2) + 1;  i++) {
        if (i * i > x) {
            return i - 1;
        }
    }
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(17));
console.log(mySqrt(100));
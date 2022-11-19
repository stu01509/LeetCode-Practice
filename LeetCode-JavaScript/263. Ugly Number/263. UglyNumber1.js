/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
    if (num === 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }

    while (num % 5 === 0) {
        num /= 5;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 2 === 0) {
        num /= 2;
    }
    return num === 1;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
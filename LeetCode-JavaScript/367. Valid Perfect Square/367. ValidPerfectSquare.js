/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    let left = 1;
    let right = num;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const target = middle * middle;

        if (target === num) {
            return true;
        }
        if (target > num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
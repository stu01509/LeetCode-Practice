/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function(num) {
    const nums = [5, 3, 2];
    if (num === 0) {
        return false;
    }
    for (let i = 0; i < nums.length; i++) {
        while(num !== 1) {
            if (num % nums[i] === 0) {
                num /= nums[i];
            } else {
                break;
            }
        }
        if (num === 1) {
            return true;
        }
    }
    return false;
};

console.log(isUgly(0));
console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));
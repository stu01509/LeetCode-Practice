/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
    let result = 0;
    let temp = 0;

    for (let i = 0; i < gain.length; i++) {
        temp += gain[i];
        result = Math.max(result, temp);
    }
    return result;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
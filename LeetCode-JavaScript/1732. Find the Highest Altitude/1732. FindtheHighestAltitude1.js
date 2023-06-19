/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
    const result = [0];

    for (let i = 0; i < gain.length; i++) {
        result.push(result[result.length - 1] + gain[i]);
    }
    return Math.max(...result);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
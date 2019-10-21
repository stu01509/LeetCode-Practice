/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function (candies) {
    const sisterSet = new Set();
    const maxSet = candies.length / 2;
    for (let i = 0; i < candies.length; i++) {
        if (sisterSet.size === maxSet) {
            return maxSet;
        }
        sisterSet.add(candies[i]);
    }
    return sisterSet.size;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([1, 1, 2, 3]))
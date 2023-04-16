/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
    const maxCandy = Math.max(...candies);
    const result = [];

    for (const candy of candies) {
        if (candy + extraCandies >= maxCandy) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function (candies, num_people) {
    let candiesNum = candies;
    const result = new Array(num_people).fill(0);;
    let index = 1;
    let count = 1;
    while (candiesNum > 0) {
        if (candiesNum < count) {
            result[index - 1] += candiesNum;
        } else {
            result[index - 1] += count;
        }
        candiesNum -= count;
        if (index === num_people) {
            index = 1;
        } else {
            index++;
        }
        count++;
    }
    return result;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
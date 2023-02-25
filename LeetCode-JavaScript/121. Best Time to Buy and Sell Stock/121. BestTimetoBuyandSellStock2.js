/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;

    prices.forEach((price) => {
        min = Math.min(min, price);
        max = Math.max(max, price - min);
    });

    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
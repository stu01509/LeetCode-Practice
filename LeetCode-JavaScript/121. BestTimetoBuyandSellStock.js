/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0;
    }
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    prices.forEach((price) => {
        min = Math.min(min, price);
        profit = Math.max(profit, price - min);
    })
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
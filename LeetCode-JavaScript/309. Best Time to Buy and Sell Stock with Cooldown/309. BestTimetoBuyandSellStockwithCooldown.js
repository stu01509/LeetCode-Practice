/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let sell = 0;
    let hold = Number.MIN_SAFE_INTEGER;
    let cooldown = 0;

    for (const price of prices) {
        const [prevSell, prevHold, prevCooldown] = [sell, hold, cooldown];
        cooldown = Math.max(prevCooldown, prevSell);
        sell = prevHold + price;
        hold = Math.max(prevHold, prevCooldown - price);
    }

    return Math.max(sell, cooldown);
};

console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1]));
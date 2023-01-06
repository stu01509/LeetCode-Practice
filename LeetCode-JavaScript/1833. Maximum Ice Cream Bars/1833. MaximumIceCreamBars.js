/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
    let result = 0;
    costs.sort((a, b) => a - b);

    for (let i = 0; i < costs.length; i++) {
        if (coins - costs[i] >= 0) {
            coins -= costs[i];
            result++;
        } else {
            break;
        }
    }
    return result;
};

console.log(maxIceCream([1, 3, 2, 4, 1], 7));
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5));
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20));
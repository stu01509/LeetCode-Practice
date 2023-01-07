/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
    const sumGas = gas.reduce((prev, current) => prev + current, 0);
    const sumCost = cost.reduce((prev, current) => prev + current, 0);
    
    if (sumGas < sumCost) {
        return -1;
    }

    let total = 0;
    let result = 0;

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }
    return result;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 4]));
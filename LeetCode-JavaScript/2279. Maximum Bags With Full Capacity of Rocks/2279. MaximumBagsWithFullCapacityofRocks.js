/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = function (capacity, rocks, additionalRocks) {
    let result = 0;
    const availableCapacity = [];

    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] === rocks[i]) {
            result++;
        } else {
            availableCapacity.push(capacity[i] - rocks[i]);
        }
    }

    availableCapacity.sort((n1, n2) => n2 - n1);

    while (availableCapacity.length !== 0 && additionalRocks >= 0) {
        const lastAvailableCapacity = availableCapacity.pop();
        if (additionalRocks - lastAvailableCapacity >= 0) {
            additionalRocks -= lastAvailableCapacity;
            result++;
        } else {
            break;
        }
    }
    return result;
};

console.log(maximumBags(
    [2, 3, 4, 5],
    [1, 2, 4, 4],
    2
));

console.log(maximumBags(
    [10, 2, 2],
    [2, 2, 0],
    100
));
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let result = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        if (truckSize - boxTypes[i][0] > 0) {
            result += (boxTypes[i][0] * boxTypes[i][1]);
            truckSize -= boxTypes[i][0];
        } else {
            result += (truckSize * boxTypes[i][1]);
            return result;
        }
    }
    return result;
};

console.log(maximumUnits([
    [1, 3],
    [2, 2],
    [3, 1]
], 4));

console.log(maximumUnits([
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9]
], 10));
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function (nums, diff) {
    let result = 0;
    const map = new Map();

    for (const num of nums) {
        map.set(num, true);
    }
    for (const num of nums) {
        if (map.get(num - diff) && map.get(num + diff)) {
            result++;
        }
    }

    return result;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
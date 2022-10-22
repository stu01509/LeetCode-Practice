/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const freq = new Map();
    const buckets = [];
    const result = [];

    nums.forEach((num) => {
        if (freq.get(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    });

    for (let [num, count] of freq) {
        buckets[count] = (buckets[count] || new Set()).add(num);
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i]) {
            result.push(...buckets[i]);
        }
        if (result.length === k) {
            break;
        }
    }
    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([-1, -1], 1));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
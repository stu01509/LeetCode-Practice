/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function (nums, k) {
    const prefix = {};
    prefix[0] = 1;

    let sum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        const remain = (sum % k + k) % k;
        count += prefix[remain] || 0;
        prefix[remain] ? prefix[remain]++ : prefix[remain] = 1;
    }
    return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([5], 9));
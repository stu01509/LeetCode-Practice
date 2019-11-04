/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const numSet = new Set();
    nums1.forEach((num) => {
        if (nums2.includes(num)) {
            numSet.add(num);
        }
    });
    return Array.from(numSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
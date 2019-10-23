/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]) + 1;
        let isFind = false;
        for (let j = index; j < nums2.length; j++) {
            if (!isFind) {
                if (nums1[i] < nums2[j]) {
                    result.push(nums2[j]);
                    isFind = true;
                }
            }
        }
        if (!isFind) {
            result.push(-1);
        }
    }
    return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
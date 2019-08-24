/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let index = 0;
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[index];
        index++;
    }
    return nums1.sort(customSort);
};

const customSort = (a, b) => {
    return a - b;
}

const num1 = [1,2,3,0,0,0];
const num2 = [2,5,6];
console.log(merge(num1, 3, num2, 3));

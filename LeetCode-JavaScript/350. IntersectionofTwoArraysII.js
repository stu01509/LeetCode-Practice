/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const result = [];
    const num1Map = new Map();
    nums1.forEach((num) => {
        if (!num1Map.get(num)) {
            num1Map.set(num, 1);
        } else {
            num1Map.set(num, num1Map.get(num) + 1);
        }
    });
    
    nums2.forEach((num) => {
        if (num1Map.get(num) > 0) {
            result.push(num);
            num1Map.set(num, num1Map.get(num) - 1);
        }
    });
    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

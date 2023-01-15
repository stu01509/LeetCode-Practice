/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function (nums) {
    const elementSum = nums.reduce((pre, cur) => pre + cur, 0);
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const strNum = nums[i].toString();
        for (let j = 0; j < strNum.length; j++) {
            digitSum += Number.parseInt(strNum[j], 10);
        }
    }

    return elementSum - digitSum;
};

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if (nums.length === 0 || nums === null ) {
        return 0;
    }

    let index = 0;
    let times = 0;
    for (let i = 2; i < nums.length; i++) {
        if (times === 2) {
            console.log(1);
            nums[index] = nums[i];
            times = 0;
        } else {
            if (nums[i - 1] === nums[i] && nums[i - 1] !== nums[i - 2]) {
                times++;
                index++;          
            } else if (nums[i - 1] !== nums[i] && nums[i - 1] !== nums[i - 2]) {
                nums[++index] = nums[i];                
            }
        }
    }
    console.log(nums);    
};

// console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));

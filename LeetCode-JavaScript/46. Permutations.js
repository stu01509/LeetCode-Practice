/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    perm(nums);
    function swap(arr, i, j) {
        if (i != j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }


    function perm(arr) {
        result.push((function fn(n) {
            for (var i = n; i < arr.length; i++) {
                swap(arr, i, n);
                if (n + 1 < arr.length - 1) { //判断数组中剩余的待全排列的元素是否大于1个  
                    fn(n + 1);
                } else {
                    // show(arr); 
                    // result.push(arr);
                    return arr;
                }
                swap(arr, i, n);
            }
        })(0));
    }
    const result = [];

    return result;
};

console.log(permute([1, 2, 3, 4, 5]));
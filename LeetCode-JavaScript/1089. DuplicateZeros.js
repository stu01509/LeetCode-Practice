/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.length < arr.length) {
            if (arr[i] === 0) {
                result.push(0);
             }
             result.push(arr[i]);
        }        
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([1, 2, 3]))
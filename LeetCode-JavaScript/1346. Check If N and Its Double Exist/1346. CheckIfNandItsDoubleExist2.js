/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
            return true;
        }
        set.add(arr[i]);
    }
    return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([7, 1, 14, 11]));
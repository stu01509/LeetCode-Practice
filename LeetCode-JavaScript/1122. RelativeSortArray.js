/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1.includes(arr2[i])) {
                result.push(arr2[i]);
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
    }
    arr1.sort(customSort);
    return result.concat(arr1);
};

const customSort = function (a ,b) {
    return a - b;
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
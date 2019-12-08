/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {    
    const result = [];
    if (numRows === 0) {
        return result;
    }

    let arr = [1];
    result.push(arr);
    for (let i = 0; i < numRows - 1; i++) {
        const tempArr = [];
        tempArr.push(1)
        for (let j = 1; j <= arr.length - 1; j++) {
            tempArr.push(arr[j] + arr[j - 1]);
        }
        tempArr.push(1)
        result.push(tempArr);
        arr = tempArr;
    }
    return result;
};

console.log(generate(5));
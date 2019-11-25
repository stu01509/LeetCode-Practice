/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (n, m, indices) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const temp = [];
        for (let j = 0; j < m; j++) {
            temp.push(0);
        }
        arr.push(temp);
    }
    
    for (let i = 0; i < indices.length; i++) {
        let row = arr[indices[i][0]];
        let col = indices[i][1];
       
        for (let j = 0; j < row.length; j++) {
            row[j]++;
        }
        for (let j = 0; j < arr.length; j++) {
            arr[j][col]++;
        }
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 !== 0) {
                count++;
            }
        }
    }
    return count;    
};

console.log(oddCells(2, 3, [
    [0, 1],
    [1, 1]
]));

console.log(oddCells(2, 2, [
    [1, 1],
    [0, 0]
]));
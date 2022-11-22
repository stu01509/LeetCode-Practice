/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
const mergeSimilarItems = function (items1, items2) {
    const map = new Map();
    for (let i = 0; i < items1.length; i++) {
        const key = items1[i][0];
        const value = items1[i][1];
        map.set(key, value);
    }

    for (let i = 0; i < items2.length; i++) {
        const key = items2[i][0];
        const value = items2[i][1];

        if (map.get(key)) {
            map.set(key, map.get(key) + value);
        } else {
            map.set(key, value);
        }
    }

    return Array.from(map).sort((num1, num2) => num1[0] - num2[0]);
};

console.log(mergeSimilarItems(
    [
        [1, 1],
        [4, 5],
        [3, 8]
    ],
    [
        [3, 1],
        [1, 5]
    ]
));

console.log(mergeSimilarItems(
    [
        [1, 1],
        [3, 2],
        [2, 3]
    ],
    [
        [2, 1],
        [3, 2],
        [1, 3]
    ]
));

console.log(mergeSimilarItems(
    [
        [1, 3],
        [2, 2]
    ],
    [
        [7, 1],
        [2, 2],
        [1, 4]
    ]
));
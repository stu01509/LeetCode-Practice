/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
    const map = new Map();
    const set = new Set();
    let isUnique = true;

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    map.forEach((val) => {
        if (set.has(val)) {
            isUnique = false;
        }
        set.add(val);
    })
    return isUnique;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
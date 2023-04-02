/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = function (nums) {
    const result = [];
    const map = new Map();

    nums.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });

    while (map.size) {
        const temp = [];
        map.forEach((val, key) => {
            if (val > 0) {
                temp.push(key);
                map.set(key, --val);
            } else if (val === 0) {
                map.delete(key);
            }
        });
        if (temp.length) {
            result.push(temp);
        }
    }
    return result;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
console.log(findMatrix([1, 2, 3, 4]));
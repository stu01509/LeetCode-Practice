/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = function (tasks) {
    const map = new Map();
    let result = 0;

    tasks.forEach((task) => {
        if (!map.get(task)) {
            map.set(task, 1);
        } else {
            map.set(task, map.get(task) + 1);
        }
    });

    for (const value of map.values()) {
        if (value === 1) {
            return -1;
        }
        result += Math.floor((value + 2) / 3);
    }

    return result;
};

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
console.log(minimumRounds([2, 3, 3]));
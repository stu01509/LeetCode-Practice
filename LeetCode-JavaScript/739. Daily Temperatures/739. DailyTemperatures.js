/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function (T) {
    const stack = [];
    const result = new Array(T.length).fill(0);

    for (let i = 0; i < T.length; i++) {
        const isEmpty = stack.length === 0;
        while (!isEmpty && T[stack[stack.length - 1]] < T[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
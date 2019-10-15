/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
    const result = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else if (ops[i] === 'C') {
            result.pop();
        } else if (ops[i] === 'D') {
            result.push(result[result.length - 1] * 2);
        } else {
            result.push(parseInt(ops[i]));
        }
    }
    const sum = result.reduce((prev, item) => {
        return prev + item;
    }, 0);
    return sum;
};

console.log(calPoints(['5', '2', 'C', 'D', '+']));
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
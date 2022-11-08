/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] &&
            Math.abs(stack[stack.length - 1].charCodeAt() - s[i].charCodeAt()) === 32) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

console.log(makeGood('leEeetcode'));
console.log(makeGood('abBAcC'));
console.log(makeGood(''));
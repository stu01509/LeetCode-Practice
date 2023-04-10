/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const BRACKETS_MAPPING = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (BRACKETS_MAPPING[s[i]]) {
            stack.push(BRACKETS_MAPPING[s[i]]);
        } else {
            const lastBracket = stack.pop();
            if (lastBracket !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function (s) {
    let isPair = false;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            isPair = !isPair;
        }
        if (!isPair && s[i] === '*') {
            count++;
        }
    }

    return count;
};

console.log(countAsterisks('l|*e*et|c**o|*de|'));
console.log(countAsterisks('iamprogrammer'));
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'));
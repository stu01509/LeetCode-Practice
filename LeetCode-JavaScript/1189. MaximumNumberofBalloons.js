/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
    const strMap = new Map();
    for (let i = 0; i < text.length; i++) {
        if (!strMap.has(text[i])) {
            strMap.set(text[i], 1);
        } else {
            strMap.set(text[i], strMap.get(text[i]) + 1);
        }
    }
    return Math.floor(Math.min(strMap.get('b'), strMap.get('a'), strMap.get('l') / 2, strMap.get('o') / 2, strMap.get('n')) || 0);
};

console.log(maxNumberOfBalloons('nlaebolko'));
console.log(maxNumberOfBalloons('loonbalxballpoon'));
console.log(maxNumberOfBalloons('leetcode'));
console.log(maxNumberOfBalloons('balon'));

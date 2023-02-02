/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
    const [smallerString, largerString] = [str1, str2].sort((a, b) => a.length - b.length);
    for (let i = smallerString.length; i > 0; i--) {
        const testString = smallerString.slice(0, i);
        const correctSmaller = !smallerString.split(testString).join('').length;
        const correctLarger = !largerString.split(testString).join('').length;

        if (correctSmaller && correctLarger) return testString;
    }
    return '';
};

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('LEET', 'CODE'));
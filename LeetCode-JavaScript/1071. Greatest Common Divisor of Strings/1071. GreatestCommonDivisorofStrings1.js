/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
    if (str1 === str2) {
        return str1;
    }
    let gcd = 0;
    let result = '';

    for (let i = 0; i <= str1.length && i <= str2.length; i++) {
        if (str1.length % i === 0 && str2.length % i === 0) {
            gcd = i;
        }        
    }   
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(result + str2.charAt(i))) {
            result += str2.charAt(i);
        }       
        if (result.length === gcd && str1.split(result).length > 2) {
            return result;
        }
    }
    return '';
};
console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB'));
console.log(gcdOfStrings('ABCDEF', 'ABC'));
console.log(gcdOfStrings('LEET', 'CODE'));
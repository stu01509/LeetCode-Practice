/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
    const strArr = [];
    for (let i = S.length - 1; i >= 0; i--) {
        const asciiCode = S[i].charCodeAt();
        if ((65 <= asciiCode && asciiCode <= 90) || (97 <= asciiCode && asciiCode <= 122)) {
            strArr.push(S[i]);            
        }
    }    
    let result = '';
    for (let i = 0; i < S.length; i++) {
        const asciiCode = S[i].charCodeAt();
        if ((65 <= asciiCode && asciiCode <= 90) || (97 <= asciiCode && asciiCode <= 122)) {
            result += strArr.shift();
        } else {
            result += S[i];
        }
    }
    return result;
};

console.log(reverseOnlyLetters('ab-cd'));
console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); //j-Ih-gfE-dCba
console.log(reverseOnlyLetters('7_28]')); //7_28]

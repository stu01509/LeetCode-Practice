/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function(N) {  
    let binaryArr = (N).toString(2).split('');   
    for (let i = 0; i < binaryArr.length; i++) {
       if (binaryArr[i] === '0') {
        binaryArr[i] = '1';
       } else if (binaryArr[i] === '1') {
            binaryArr[i] = '0';
       }
    }
    return parseInt(binaryArr.join(''), 2);
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));
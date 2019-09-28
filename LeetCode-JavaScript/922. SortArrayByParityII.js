/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
    const odd = A.filter(num => num % 2 !== 0);
    const even = A.filter(num => num % 2 === 0);;
    const result = [];
    
    for (let i = 0; i < A.length; i++) {
        if (i % 2 === 0) {
            result.push(even.shift());
        } else {
            result.push(odd.shift());
        }
    }
    return result;
};

console.log(sortArrayByParityII([4,2,5,7]));
/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    let mask = ~0;
    while (num & mask) {
        mask <<= 1;
    }
    return ~num ^ mask;
};

console.log(findComplement(5));
console.log(findComplement(1));
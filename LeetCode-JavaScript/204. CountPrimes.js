/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    const primesTable = [];
    
    for (let i = 0; i <= n; i++) {
        primesTable[i] = true;
    }

    primesTable[0] = false;
    primesTable[1] = false;
    
    for (let i = 2; i < n; i++) {
        if (primesTable[i]) {
            for (let j = i + i; j < n; j += i) {
                primesTable[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (primesTable[i] === true) {
            count++;
        }
    }
    return count;
};

console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(10));
console.log(countPrimes(20191107));
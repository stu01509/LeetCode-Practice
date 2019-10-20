/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function (L, R) {
    const primeArr = [2, 3, 5, 7, 11, 13, 17, 19];
    let result = 0;
    for (let i = L; i <= R; i++) {
        let count = 0;
        const binaryArr = (i).toString(2).split('');
        binaryArr.forEach((str) => {
            if (str === '1') {
                count++;
            }
        })
        if (isPrime(count) && count !== 1) {
            result++;
        }
    }
    return result;
};

const isPrime = function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
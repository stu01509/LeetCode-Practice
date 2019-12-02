/**
 * @param {number} n
 * @return {number}
 */
const numPrimeArrangements = function(n) {
    let primeCount = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }
    const noPrimeCount = n - primeCount;

    let fact1 = BigInt(1);
    let fact2 = BigInt(1) ;

    for (let i = 1; i <= primeCount; i++) {
        fact1 *= BigInt(i);
    }

    for (let i = 1; i <= noPrimeCount; i++) {
        fact2 *= BigInt(i);
    }
    return (fact1 * fact2) % BigInt(1000000007);
    
};

const isPrime = (n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        return true;
    }
    return false;
}

console.log(numPrimeArrangements(5));
console.log(numPrimeArrangements(100));//638650835
/**
 * @param {number} N
 * @return {number}
 */
const fib = function(N) {
    if (N === 0) {
        return 0;
    }
    if (N === 1 || N === 2) {
        return 1;
    } else {
        return fib(N - 1) + fib(N - 2);
    }
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
    const OPERATIONS_MAPPING = {
        '++X': 1,
        'X++': 1,
        '--X': -1,
        'X--': -1,
    }
    let result = 0;

    operations.forEach((operation) => {
        result += OPERATIONS_MAPPING[operation];
    });

    return result;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
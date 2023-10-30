/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
    arr.sort((a, b) => getOnesComplement(a) - getOnesComplement(b) || a - b);

    return arr;
};

const getOnesComplement = (num) => {
    const binary = (num).toString('2');
    const countOfOne = binary.split('1').length - 1;

    return countOfOne;
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function(arr) {
  arr.sort((a, b) => getBitCount(a) - getBitCount(b) || a - b);

  return arr;
};

const getBitCount = (num) => {
  let sum = 0;
  while (num) {
    sum += num & 1;
    num = num >> 1;
  }

  return sum;
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
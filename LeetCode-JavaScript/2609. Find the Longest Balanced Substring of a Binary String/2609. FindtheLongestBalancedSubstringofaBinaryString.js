/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestBalancedSubstring = function(s) {
  let result = 0;
  let times = 0;

  while (true) {
    times++;
    const compare = '0'.repeat(times) + '1'.repeat(times);
    if (s.includes(compare)) {
      result = times;
    } else {
        break;
    }
  }
  return result * 2;
};

console.log(findTheLongestBalancedSubstring('01000111'));
console.log(findTheLongestBalancedSubstring('00111'));
console.log(findTheLongestBalancedSubstring('111'));
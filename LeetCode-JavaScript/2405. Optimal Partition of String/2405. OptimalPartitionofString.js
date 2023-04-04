/**
 * @param {string} s
 * @return {number}
 */
const partitionString = function(s) {
  let result = 1;
  let currentString = '';

  for (let i = 0; i < s.length;) {
    if (!currentString.includes(s[i])) {
        currentString += s[i];
        i++;
    } else {
        currentString = '';
        result++;
    }
  }
  
  return result;
};

console.log(partitionString('abacaba'));
console.log(partitionString('ssssss'));
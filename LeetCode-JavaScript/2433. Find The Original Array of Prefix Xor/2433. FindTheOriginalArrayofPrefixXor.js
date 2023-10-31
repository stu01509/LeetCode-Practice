/**
 * @param {number[]} pref
 * @return {number[]}
 */
const findArray = function (pref) {
  const result = [pref[0]];

  for (let i = 1; i < pref.length; i++) {
    result.push(pref[i - 1] ^ pref[i]);
  }

  return result;
};

console.log(findArray([5, 2, 0, 3, 1]));
console.log(findArray([13]));
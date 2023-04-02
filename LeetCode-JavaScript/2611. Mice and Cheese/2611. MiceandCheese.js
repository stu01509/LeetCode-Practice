/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
const miceAndCheese = function (reward1, reward2, k) {
  const rewards = [];
  let result = 0;

    
  for (let i = 0; i < reward1.length; i++) {
    rewards.push([reward2[i] - reward1[i], reward1[i], reward2[i]]);
  }

  rewards.sort((arr1, arr2) => arr1[0] - arr2[0]);

  console.log(rewards);
  for (let i = 0; i < k; i++) {
    result += rewards[i][1];
  }
  for (let i = k; i < reward1.length; i++) {
    result += rewards[i][2];
  }
  return result;
};

console.log(miceAndCheese([1, 1, 3, 4], [4, 4, 1, 1], 2));
// console.log(miceAndCheese([1, 1], [1, 1], 2));
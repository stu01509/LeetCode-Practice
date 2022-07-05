/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
    const windowSize = cardPoints.length - k;
    let currentSum = 0;
    for (let i = windowSize; i < cardPoints.length; i++) {
        currentSum += cardPoints[i];
    }
    let reuslt = currentSum;
    for (let i = 0; i < k; i++) {
        currentSum += cardPoints[i];
        currentSum -= cardPoints[i + windowSize];
        reuslt = Math.max(reuslt, currentSum);
    }
    return reuslt;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
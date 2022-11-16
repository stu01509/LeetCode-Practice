/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const guessNum = Math.floor((left + right) / 2);
        const guessResult = guess(guessNum);
        if (guessResult === 0) {
            return guessNum;
        }
        if (guessResult === -1) {
            right = guessNum - 1;
        }
        if (guessResult === 1) {
            left = guessNum + 1;
        }
    }
};
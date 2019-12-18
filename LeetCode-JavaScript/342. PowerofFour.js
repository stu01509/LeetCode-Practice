/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
   while(num !== 1) {
        num /= 4;
        if (num < 1) {
            return false;
        }
   }
   return true;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(2));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
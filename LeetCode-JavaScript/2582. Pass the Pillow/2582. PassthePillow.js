/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function (n, time) {
  let current = 0;
  let direction = 1;

  for (let i = 0; i < time; i++) {
    current += direction;
    if (current === n - 1) {
        direction *= -1;
    } else if (current === 0) {
        direction *= -1;
    }
  }
  return current + 1;
};

console.log(passThePillow(4, 5)); // 2
console.log(passThePillow(3, 2)); // 3
console.log(passThePillow(8, 9)); // 6
console.log(passThePillow(18, 38)); // 5
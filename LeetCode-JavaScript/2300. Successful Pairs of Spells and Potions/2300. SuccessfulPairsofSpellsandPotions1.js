/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = function (spells, potions, success) {
    const result = [];

    potions.sort((n1, n2) => n1 - n2);

    for (let i = 0; i < spells.length; i++) {
        let temp = 0;
        for (let j = 0; j < potions.length; j++) {
            if (spells[i] * potions[j] >= success) {
                temp = potions.length - j;
                break;
            }
        }
        result.push(temp);
    }
    return result;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function (rings) {
    let count = 0;

    for (let i = 0; i < 10; i++) {
        const RED_PREFIX = `R${i}`;
        const GREEN_PREFIX = `G${i}`;
        const BLUE_PREFIX = `B${i}`;
        if (
            rings.includes(RED_PREFIX) &&
            rings.includes(GREEN_PREFIX) &&
            rings.includes(BLUE_PREFIX)
        ) {
            count++;
        }
    }
    return count;
};

console.log(countPoints('B0B6G0R6R0R6G9'));
console.log(countPoints('B0R0G0R9R0B0G0'));
console.log(countPoints('G4'));
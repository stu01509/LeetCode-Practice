/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
const categorizeBox = function (length, width, height, mass) {
    const isMass = mass >= 100;
    const isBulky = length >= 1E4 || width >= 1E4 || height >= 1E4 || (length * width * height) >= 1E9;
    if (isMass && isBulky) {
        return 'Both';
    }
    if (!isMass && !isBulky) {
        return 'Neither';
    }
    if (isMass) {
        return 'Heavy';
    }
    if (isBulky) {
        return 'Bulky';
    }
};

console.log(categorizeBox(1000, 35, 700, 300));
console.log(categorizeBox(200, 50, 800, 50));
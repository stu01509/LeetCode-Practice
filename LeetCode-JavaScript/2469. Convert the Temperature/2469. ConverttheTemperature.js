/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = function (celsius) {
    const kelvin = (celsius + 273.15).toFixed(5);
    const fahrenheit = ((celsius * 1.8) + 32).toFixed(5);
    return [kelvin, fahrenheit];
};

console.log(convertTemperature(36.50));
console.log(convertTemperature(122.11));
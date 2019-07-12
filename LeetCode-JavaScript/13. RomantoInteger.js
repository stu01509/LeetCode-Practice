/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanConvert = (s) => {
        switch (s) {
            case 'I': {
                return 1;
            } 
            case 'V': {
                return 5;
            }
            case 'X': {
                return 10;
            }
            case 'L': {
                return 50;
            }
            case 'C': {
                return 100;
            }
            case 'D': {
                return 500;
            }
            case 'M': {
                return 1000;
            }
        }
    }

    if (s === null || s.length === 0) return 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let now = s[i];
        let next = s[i + 1];
        if (romanConvert(now) < romanConvert(next)) {
            result += (romanConvert(next) - romanConvert(now));
            i++;
        } else {
            result += romanConvert(now);
        }        
    }
    return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));




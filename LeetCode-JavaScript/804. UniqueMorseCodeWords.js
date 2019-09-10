/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
    const morseMap = new Map();
    const morseArr = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
    for (let i = 0; i < words.length; i++) {
        let morseStr = '';
        for (let j = 0; j < words[i].length; j++) {
            morseStr += morseArr[words[i][j].charCodeAt() - 97];
        }
        console.log(morseStr);
        if (morseMap.get(morseStr) === undefined) {
            morseMap.set(morseStr, '');
        }
    }
    return morseMap.size;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']))
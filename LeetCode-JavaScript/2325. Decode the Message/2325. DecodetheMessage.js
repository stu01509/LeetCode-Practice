/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
    const trimKey = key.split(' ').join('');
    const mapping = new Map();
    let asciiIndex = 0;
    let result = '';
    for (let i = 0; i < trimKey.length; i++) {
        if (!mapping.get(trimKey[i])) {
            mapping.set(trimKey[i], String.fromCharCode(97 + asciiIndex));
            asciiIndex++
        }
    }

    for (let i = 0; i < message.length; i++) {
        if (mapping.get(message[i])) {
            result += mapping.get(message[i]);
        } else {
            result += ' ';
        }
    }
    return result;
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'));
console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'));
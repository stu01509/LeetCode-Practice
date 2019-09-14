/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function(S) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    const splitArr = S.split(' ');
    for (let i = 0; i < splitArr.length; i++) {
        let word = '';
        if (vowelArr.includes(splitArr[i][0].toLowerCase())) {
            word = splitArr[i] + 'ma' + 'a'.repeat(i + 1);
        } else {
            word = splitArr[i].slice(1, splitArr[i].length) + splitArr[i][0] + 'ma' + 'a'.repeat(i + 1);
        }
        splitArr[i] = word;
    }
    return splitArr.join(' ');
};

console.log(toGoatLatin('I speak Goat Latin'));
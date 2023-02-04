/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    const s1Length = s1.length;
    const s2Length = s2.length;
    const s1Mapping = new Array(26).fill(0);
    const s2Mapping = new Array(26).fill(0);

    for (let i = 0; i < s1Length; i++) {
        const charCodeIndex = s1[i].charCodeAt() - 97;
        ++s1Mapping[charCodeIndex];
    }

    for (let i = 0; i < s2Length; i++) {
        if (i >= s1Length) {
            const charCodeIndex = s2[i - s1Length].charCodeAt() - 97;
            --s2Mapping[charCodeIndex];
        }
        const charCodeIndex = s2[i].charCodeAt() - 97;
        ++s2Mapping[charCodeIndex];
        if (s1Mapping.join('') === s2Mapping.join('')) {
            return true;
        }
    }
    return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
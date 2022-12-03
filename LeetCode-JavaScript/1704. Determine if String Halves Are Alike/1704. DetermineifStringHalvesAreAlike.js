/**
 * @param {string} s
 * @return {boolean}
 */
 const halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let aVowelsCount = 0;
    let bVowelsCount = 0;
    
    for (let i = 0; i < s.length / 2; i++) {
        if (vowels.has(s[i])) {
            aVowelsCount++;
        }
    }
    
    for (let i = s.length / 2; i < s.length; i++) {
        if (vowels.has(s[i])) {
            bVowelsCount++;
        }
    }
    return aVowelsCount === bVowelsCount;
};

console.log(halvesAreAlike('book'));
console.log(halvesAreAlike('textbook'));
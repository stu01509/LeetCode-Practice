/**
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = function (ideas) {
    const suffixMapping = Array.from({
        length: 26
    }, () => new Set());

    for (const idea of ideas) {
        const charCodeIndex = idea[0].charCodeAt() - 97;
        suffixMapping[charCodeIndex].add(idea.substring(1));
    }

    let result = 0;

    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            const size1 = suffixMapping[i].size;
            const size2 = suffixMapping[j].size;

            let common = 0;

            for (const suffix of suffixMapping[i]) {
                if (suffixMapping[j].has(suffix)) {
                    common++;
                }
            }

            result += (size1 - common) * (size2 - common) * 2;
        }
    }

    return result;
};

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));
console.log(distinctNames(["lack", "back"]));
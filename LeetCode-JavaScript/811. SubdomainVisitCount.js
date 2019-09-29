/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function(cpdomains) {
    const domainMap = new Map();
    const result = [];

    for (let i = 0; i < cpdomains.length; i++) {
        const count = parseInt(cpdomains[i].split(' ')[0], 10);
        const domain = cpdomains[i].split(' ')[1];
        const domainArr = domain.split('.');
        let index = 0;
        for (let i = 0; i < domainArr.length; i++) {
            let str = '';
            for (let i = index; i < domainArr.length; i++) {
                if (i === domainArr.length - 1) {
                    str += domainArr[i];
                } else {
                    str += domainArr[i] + '.';
                }
            }
            index++;
            if (!domainMap.has(str)) {
                domainMap.set(str, count);
            } else {
                domainMap.set(str, domainMap.get(str) + count);
            }
        }
    }
    domainMap.forEach((val, key) => result.push(`${val} ${key}`))
    return result;
};

console.log(subdomainVisits(['9001 discuss.leetcode.com']));
console.log(subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']));

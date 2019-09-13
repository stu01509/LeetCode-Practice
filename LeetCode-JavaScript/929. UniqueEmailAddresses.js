/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
    const emailMap = new Map();
    for (let i = 0; i < emails.length; i++) {
        const splitArr = emails[i].split('@');
        let accout = splitArr[0]
        while(accout.includes('.')) {
            accout = accout.replace('.', '');            
        }
        if (accout.includes('+')) {
            accout = accout.substring(0, accout.indexOf('+'));
        }        
        const result = accout + '@' + splitArr[1];
        console.log(result);
        
        if (emailMap.get(result) === undefined) {
            emailMap.set(result, '');
        }
    }
    return emailMap.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
console.log(numUniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"]));


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) { 
    if (s.length % 2 === 1) return false;

    let charStack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);

        if (char === "(" || char === "[" || char === "{") {
            charStack.push(char);
        } else {
            if (charStack.length === 0) return false;         

            let oldC = charStack.pop();
            if(oldC === '(' && char !== ')') {
                return false;
            } else if (oldC === '[' && char !== ']') {
                return false;
            } else if (oldC === '{' && char !== '}') {
                return false;
            }
        }
    }    
    return charStack.length === 0;
};

console.log(isValid('{[]}'))
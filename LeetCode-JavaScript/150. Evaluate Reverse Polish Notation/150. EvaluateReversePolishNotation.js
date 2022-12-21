/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = [];
    for (const token of tokens) {
        switch (token) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(num2 - num1);
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                const value1 = stack.pop();
                const value2 = stack.pop();
                value1 / value2 >= 0 ? stack.push(Math.floor(value2 / value1)) : stack.push(Math.ceil(value2 / value1));
                break;
            default:
                stack.push(Number.parseInt(token, 10));
                break;
        }
    }
    return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
console.log(evalRPN(["4", "3", "-"]));
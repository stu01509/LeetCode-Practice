/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];

  let indexOfPopped = 0;
  for (const num of pushed) {
    stack.push(num);

    while (stack.length && stack[stack.length - 1] === popped[indexOfPopped]) {
      indexOfPopped++;
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
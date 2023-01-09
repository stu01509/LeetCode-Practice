function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    const stack = [];
    const result = [];
    
    stack.push(root);

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return result;  
};

console.log(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))));
console.log(preorderTraversal());
console.log(preorderTraversal(new TreeNode(1)));
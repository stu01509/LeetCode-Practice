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
    return preOrder(root, []);
};

const preOrder = function (node, result) {
    if (!node) {
        return result;
    }
    result.push(node.val);
    if (node.left) {
        preOrder(node.left, result);
    }
    if (node.right) {
        preOrder(node.right, result);
    }
    return result;
};

console.log(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))));
console.log(preorderTraversal());
console.log(preorderTraversal(new TreeNode(1)));
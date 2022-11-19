function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
};
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
 * @return {number}
 */
const countNodes = function (root) {
    if (root) {
        const leftTreeHeight = getTreeHeight(root.left);
        const rightTreeHeight = getTreeHeight(root.right);
        if (leftTreeHeight === rightTreeHeight) {
            return (1 << leftTreeHeight) + countNodes(root.right);
        } else {
            return (1 << leftTreeHeight - 1) + countNodes(root.left);
        }
    }
    return 0;
};

const getTreeHeight = function (root) {
    if (root) {
        return 1 + getTreeHeight(root.left);
    }
    return 0;
};

console.log(countNodes(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)))));
console.log(countNodes());
console.log(countNodes(new TreeNode(1)));
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
const inorderTraversal = function (root) {
    const result = [];

    const inorder = (node) => {
        if (!node) {
            return;
        }
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    };

    inorder(root);
    return result;
};

console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))));
console.log(inorderTraversal());
console.log(inorderTraversal(new TreeNode(1)));

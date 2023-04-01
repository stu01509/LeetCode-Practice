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
 * @return {number}
 */
const maxPathSum = function (root) {
    let result = Number.MIN_VALUE;

    const getMaxSum = (node) => {
        if (!node) {
            return 0;
        }
        const leftSum = getMaxSum(node.left);
        const rightSum = getMaxSum(node.right);
        result = Math.max(result, node.val + leftSum + rightSum);
        return Math.max(0, node.val + leftSum, node.val + rightSum);
    }

    getMaxSum(root);
    return result;
};

console.log(maxPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
console.log(maxPathSum(new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
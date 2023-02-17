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
const minDiffInBST = function (root) {
    let prev = null;
    let minDiff = Number.MAX_SAFE_INTEGER;

    const inorder = function (node) {
        if (node === null) {
            return;
        }

        inorder(node.left);

        if (prev === null) {
            prev = node.val;
        } else {
            minDiff = Math.min(minDiff, node.val - prev);
            prev = node.val;
        }

        inorder(node.right);
    };

    if (root === null) {
        return -1;
    }

    inorder(root);

    return minDiff;
};

console.log(minDiffInBST(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))));
console.log(minDiffInBST(new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)))));
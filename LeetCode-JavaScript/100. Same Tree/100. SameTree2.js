function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p !== null && q !== null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
};

console.log(isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3))
));

console.log(isSameTree(
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, new TreeNode(), new TreeNode(2))
));

console.log(isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2))
));
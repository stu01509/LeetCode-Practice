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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
    if (!subRoot) {
        return true;
    }
    if (!root) {
        return false;
    }
    if (isSameTree(root, subRoot)) {
        return true;
    }
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
};

const isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p !== null && q !== null && p.val === q.val) {
        return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
    }
    return false;
}

console.log(isSubtree(
    new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5)),
    new TreeNode(4, new TreeNode(1), new TreeNode(2))
));

console.log(isSubtree(
    new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5)),
    new TreeNode(4, new TreeNode(1), new TreeNode(2))
));
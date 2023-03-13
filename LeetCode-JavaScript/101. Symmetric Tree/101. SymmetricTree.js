function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
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
 * @return {boolean}
 */
const isSymmetric = function (root) {
    if (!root) {
        return true;
    }

    return isSame(root.left, root.right);
};

const isSame = function (leftroot, rightroot) {
    if (
        (!leftroot && rightroot) ||
        (leftroot && !rightroot) ||
        (leftroot && rightroot && leftroot.val !== rightroot.val)
    ) {
        return false;
    }

    if (leftroot && rightroot) {
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    }

    return true;
};

console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))));
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)))));
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
const maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    let level = 0;
    const queue = [root];
    while (queue.length) {
        const currentLevelLen = queue.length;
        for (let i = 0; i < currentLevelLen; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        level += 1;
    }
    return level;
};

console.log(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
console.log(maxDepth(new TreeNode(1, new TreeNode(null), new TreeNode(2))));
console.log(maxDepth(new TreeNode(0, new TreeNode(2, new TreeNode(1, new TreeNode(5), new TreeNode(1))), new TreeNode(4, new TreeNode(3, new TreeNode(), new TreeNode(6)), new TreeNode(-1, new TreeNode(), new TreeNode(8))))));
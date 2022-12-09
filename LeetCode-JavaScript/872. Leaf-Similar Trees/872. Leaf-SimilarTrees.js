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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
    const leaves1Value = [];
    const leaves2Value = [];

    const dfs = (root, leaves) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            leaves.push(root.val);
        }
        dfs(root.left, leaves);
        dfs(root.right, leaves);
    };

    dfs(root1, leaves1Value);
    dfs(root2, leaves2Value);    
    return leaves1Value.join(',') === leaves2Value.join(',');
};

console.log(leafSimilar(
    new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(9), new TreeNode(8))),
    new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(7)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))))
));

console.log(leafSimilar(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(3), new TreeNode(2))
));
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const result = [];
    const queue = [root];

    while (queue.length) {
        const temp = [];
        const currentQueueLength = queue.length;

        for (let i = 0; i < currentQueueLength; i++) {
            const node = queue.shift();
            if (node) {
                temp.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        if (temp.length) {
            result.push(temp);
        }
    }

    return result;
};


console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
console.log(levelOrder(new TreeNode(0)));
console.log(levelOrder());
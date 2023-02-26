function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
    const result = [];

    const dfs = (node) => {
        if (!node) {
            result.push('null');
            return;
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
    const values = data.split(',');
    let index = 0;

    const dfs = () => {
        if (values[index] === 'null') {
            index++;
            return null;
        }

        const node = new TreeNode(values[index]);
        index++;
        node.left = dfs();
        node.right = dfs();
        return node;
    };

    return dfs();
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
console.log(deserialize(serialize(new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5))))));
console.log(deserialize(serialize(new TreeNode())));
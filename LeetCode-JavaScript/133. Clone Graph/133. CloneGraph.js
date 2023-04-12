 function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
 };
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node, visited = new Map()) {
  if (!node) {
    return null;
  }

  if (!visited.has(node)) {
    const cloneNode = new Node(node.val);
    visited.set(node, cloneNode);

    for (const neighbor of node.neighbors) {
      const cloneNeighbor = cloneGraph(neighbor, visited);
      cloneNode.neighbors.push(cloneNeighbor);
    }
  }

  return visited.get(node);
};

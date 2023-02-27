class Trie {

  constructor() {
    this.root = {};
  }

  /**
   * 
   * @param {string} word 
   * @returns {node}
   */
  traverse(word) {
    let node = this.root;
    for (const char of word) {
      node = node[char];
      if (node === undefined) {
        return null;
      }
    }
    return node;
  }
  

  /** 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isWord = true;
  };

  /** 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {

  };

  /** 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {

  };
};
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /** 
   * @param {string} word
   * @return {void}
   */
    addWord(word, node = this.root) {
      for (const char of word) {
        const child = node.children[char] || new TrieNode();
        node.children[char] = child;
        node = child;
      }
      node.isWord = true;
    }

    /** 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
      return this.dfs(word, this.root, 0);
    }

    dfs(word, node, index) {
      if (!node) {
        return false;
      }

      const isWord = index === word.length;
      if (isWord) {
        return node.isWord;
      }

      const isWildCard = word[index] === '.';
      if (isWildCard) {
        return this.hasWildCard(word, node, index);
      }

      return this.dfs(word, node[word[index]], index + 1);
    }

    hasWildCard(word, node, index) {
      for (const char of Object.keys(node)) {
        const child = node[char];
        const hasWord = this.dfs(word, child, index + 1);
        if (hasWord) {
          return true;
        }
      }
      return false;
    }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
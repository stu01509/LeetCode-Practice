class WordDictionary {
  constructor() {
    this.lookup = {};
  }

  /** 
   * @param {string} word
   * @return {void}
   */
    addWord(word) {
      if (this.lookup[word.length] === undefined) {
        this.lookup[word.length] = [word];
      } else {
        this.lookup[word.length].push(word);
      }
    }

    /** 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
      if (this.lookup[word.length] === undefined) {
        return false;
      }

      for (const item of this.lookup[word.length]) {
        let isMatch = false;
        for (let i = 0; i < word.length; i++) {
          if (item[i] === word[i] || word[i] === '.') {
            isMatch = true;
          } else {
            isMatch = false;
            break;
          }
        }
        if (isMatch) {
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
/**
 * Initialize your data structure here.
 */
const MyHashSet = function() {
    this.data = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (this.data[key] === undefined) {
        this.data[key] = 0;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (this.data[key] !== undefined) {
        delete this.data[key];
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
   if (this.data[key] !== undefined) {
       return true;
   } else {
       return false;
   }
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
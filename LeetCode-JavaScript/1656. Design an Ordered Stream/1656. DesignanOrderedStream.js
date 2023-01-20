/**
 * @param {number} n
 */
const OrderedStream = function (n) {
    this.ptr = 0;
    this.stream = new Array().fill(n);
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.stream[idKey - 1] = value;
    const result = [];

    for (let i = this.ptr; i < this.stream.length; i++) {
        if (this.stream[i]) {
            this.ptr++;
            result.push(this.stream[i]);
        } else {
            break;
        }
    }
    return result;
};

const os = new OrderedStream(5);
console.log(os.insert(3, "ccccc"));
console.log(os.insert(1, "aaaaa"));
console.log(os.insert(2, "bbbbb"));
console.log(os.insert(5, "eeeee"));
console.log(os.insert(4, "ddddd"));
/**
 * @param {number} value
 * @param {number} k
 */
const DataStream = function (value, k) {
    this.count = 0;
    this.value = value;
    this.k = k;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
    if (num !== this.value) {
        this.count = 0;
        return false;
    }
    this.count++;
    return this.count >= this.k;
};

const obj = new DataStream(4, 3);
console.log(obj.consec(4));
console.log(obj.consec(4));
console.log(obj.consec(4));
console.log(obj.consec(3));
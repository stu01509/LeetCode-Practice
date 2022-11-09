const StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let currentSpan = 1;

    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        const lastStock = this.stack.pop();
        const lastSpan = lastStock[1];
        currentSpan += lastSpan;
    }
    
    this.stack.push([price, currentSpan]);
    return currentSpan;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(85));
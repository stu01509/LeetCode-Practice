/**
 * @param {number} n
 */
const SeatManager = function(n) {
  this.firstSeat = 0;
  this.seats = new Array(n).fill(false);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  for (let i = this.firstSeat; i < this.seats.length; i++) {
    if (this.seats[i] === false) {
      this.seats[i] = true;
      this.firstSeat = i;
      return i + 1;
    }
  }
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
  this.seats[seatNumber - 1] = false;
  this.firstSeat = Math.min(this.firstSeat, seatNumber - 1);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

const obj = new SeatManager(5);
console.log(obj.reserve());
console.log(obj.reserve());
obj.unreserve(2);
console.log(obj.reserve());
console.log(obj.reserve());
console.log(obj.reserve());
console.log(obj.reserve());
obj.unreserve(5);
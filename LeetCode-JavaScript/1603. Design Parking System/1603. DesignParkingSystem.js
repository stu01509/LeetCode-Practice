/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function (big, medium, small) {
    this.BIG_CAR = 1;
    this.MEDIUM_CAR = 2;
    this.SMALL_CAR = 3;
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === this.BIG_CAR) {
        return --this.big >= 0;
    } else if (carType === this.MEDIUM_CAR) {
        return --this.medium >= 0;
    } else if (carType === this.SMALL_CAR) {
        return --this.small >= 0;
    }
};

const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));
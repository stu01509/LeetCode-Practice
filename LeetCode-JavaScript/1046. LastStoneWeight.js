/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    if(stones.length == 1) return stones[0];
    stones.sort(customSort)
    while(stones.length > 1) {
        const x = stones.shift();
        const y = stones.shift();
        if (x - y !== 0) {
            stones.push(x - y);
            stones.sort(customSort)
        }
    }
    return stones;
};

const customSort = function(a , b) {
    return b - a;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
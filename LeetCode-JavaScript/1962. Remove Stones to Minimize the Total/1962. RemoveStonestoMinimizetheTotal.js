/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
const minStoneSum = function (piles, k) {
    let sum = 0;
    const maxPriorityQueue = new MaxPriorityQueue({
        priority: x => x
    });

    for (let i = 0; i < piles.length; i++) {
        sum += piles[i];
        maxPriorityQueue.enqueue(piles[i]);
    }

    for (let i = 0; i < k; i++) {
        const chose = maxPriorityQueue.dequeue().element;
        const remain = Math.floor(chose / 2);
        sum -= remain;
        maxPriorityQueue.enqueue(chose - remain);
    }
    return sum;
};

console.log(minStoneSum([5, 4, 9], 2));
console.log(minStoneSum([4, 3, 6, 7], 3));
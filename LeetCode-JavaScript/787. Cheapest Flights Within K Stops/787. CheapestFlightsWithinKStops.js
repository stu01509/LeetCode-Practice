/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
    let M = new Array(n).fill().map((_, i) => i === src ? 0 : Infinity);

    for (let i = 0; i < k + 1; i++) {
        const N = [...M];
        for (const [from, to, price] of flights) {
            N[to] = Math.min(N[to], M[from] + price);
        }
        M = [...N];
    }
    return M[dst] === Infinity ? -1 : M[dst];
};

console.log(findCheapestPrice(
    4,
    [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200]
    ],
    0,
    3,
    1,
));

console.log(findCheapestPrice(
    3,
    [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500]
    ],
    0,
    2,
    1,
));

console.log(findCheapestPrice(
    3,
    [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500]
    ],
    0,
    2,
    0,
));
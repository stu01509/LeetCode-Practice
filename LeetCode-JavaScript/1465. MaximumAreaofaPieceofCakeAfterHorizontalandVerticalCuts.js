/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = function (h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    let maxH = 0;
    let maxW = 0;
    horizontalCuts.unshift(0);
    horizontalCuts.push(h);
    verticalCuts.unshift(0);
    verticalCuts.push(w);

    for (let i = 1; i < horizontalCuts.length; i++) {
        maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
    }

    for (let i = 1; i < verticalCuts.length; i++) {
        maxW = Math.max(maxW, verticalCuts[i] - verticalCuts[i - 1]);
    }

    return BigInt(maxH) * BigInt(maxW) % 1000000007n;
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
console.log(maxArea(5, 4, [3, 1], [1]));
console.log(maxArea(5, 4, [3], [3]));
console.log(maxArea(1000000000, 1000000000, [2], [2]));
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    const sortArr = heights.concat().sort(customSort);
    console.log(sortArr);
    
    let count = 0;
    for (let i = 0; i < heights.length; i++) {       
        if (heights[i] !== sortArr[i]) {
            count++;
        }
    }
    return count;
};

const customSort = (a, b) => {
    return a - b;
}

console.log(heightChecker([1,1,4,2,1,3]));

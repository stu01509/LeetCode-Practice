/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = function(N) {
    const binaryStr = (N).toString(2);
    let gapCount = 0;
    let tempGapCount = 0;
    
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === '1') {
            if (tempGapCount !== 0) {
                gapCount = Math.max(gapCount, tempGapCount);
                tempGapCount = 1;
            } else {
                tempGapCount++;
            }
        } else if(tempGapCount !== 0) {
            tempGapCount++;
        }
    
    }
    return gapCount
};

console.log(binaryGap(22));
console.log(binaryGap(5));
console.log(binaryGap(8));
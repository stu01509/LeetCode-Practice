/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
    people.sort((p1, p2) => p1 - p2);

    let left = 0;
    let right = people.length - 1;
    let result = 0;
        
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        result++;
    }

    return result;
};

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
console.log(numRescueBoats([5, 1, 4, 2], 6));
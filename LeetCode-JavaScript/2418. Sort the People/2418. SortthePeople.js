/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function (names, heights) {
    const peoplesMapping = {};
    const result = [];

    for (let i = 0; i < names.length; i++) {
        peoplesMapping[heights[i]] = names[i];
    }

    heights.sort((a, b) => b - a);

    for (let i = 0; i < heights.length; i++) {
        result.push(peoplesMapping[heights[i]]);
    }

    return result;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
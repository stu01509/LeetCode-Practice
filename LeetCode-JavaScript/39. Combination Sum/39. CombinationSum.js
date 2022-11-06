/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    const result = [];

    const dfs = function (i, current, total) {
        if (total === target) {
            result.push([...current]);
            return;
        }

        if (i >= candidates.length || total > target) {
            return;
        }

        current.push(candidates[i]);
        dfs(i, current, total + candidates[i]);
        current.pop();
        dfs(i + 1, current, total);
    }

    dfs(0, [], 0);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
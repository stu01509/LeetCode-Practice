/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
    const result = [];
    const visited = {};

    const dfs = function (index, temp) {
        if (visited[temp]) {
            return;
        }
        if (temp.length >= 2) {
            result.push(temp);
        }

        for (let i = index; i < nums.length; i++) {
            if (temp[temp.length - 1] > nums[i]) {
                continue;
            }
            visited[temp] = true;
            dfs(i + 1, [...temp, nums[i]]);
        }
    }

    dfs(0, []);
    return result;
};

console.log(findSubsequences([4, 6, 7, 7]));
console.log(findSubsequences([4, 4, 3, 2, 1]));
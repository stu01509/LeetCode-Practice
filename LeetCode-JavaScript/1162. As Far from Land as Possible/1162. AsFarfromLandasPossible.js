/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
    const DIRECTION = [{
            first: 1,
            second: 0
        },
        {
            first: -1,
            second: 0
        },
        {
            first: 0,
            second: 1
        },
        {
            first: 0,
            second: -1
        },
    ];
    const N = grid.length;
    const queue = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) {
                queue.push({
                    first: i,
                    second: j,
                })
                grid[i][j] = -1;
            }
        }
    }

    let step = -1;
    let result = -1;

    while (queue.length !== 0) {
        let queueSize = queue.length;
        step++;

        while (queueSize--) {
            const x = queue[0].first;
            const y = queue[0].second;
            queue.shift();

            for (let i = 0; i < 4; i++) {
                const newX = x + DIRECTION[i].first;
                const newY = y + DIRECTION[i].second;

                if (newX < 0 || newX >= N || newY < 0 || newY >= N) {
                    continue;
                }

                if (grid[newX][newY] === -1) {
                    continue;
                }

                if (grid[newX][newY] === 0) {
                    result = Math.max(result, step + 1);
                    grid[newX][newY] = -1;
                    queue.push({
                        first: newX,
                        second: newY,
                    })
                }
            }
        }
    }
    return result;
};

console.log(maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
]));

console.log(maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]));
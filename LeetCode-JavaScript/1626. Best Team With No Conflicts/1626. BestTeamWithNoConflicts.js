/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function (scores, ages) {
    const SIZE = scores.length;
    const players = [];

    for (let i = 0; i < SIZE; i++) {
        players.push({
            age: ages[i],
            score: scores[i]
        });
    }

    players.sort((player1, player2) =>
        player1.age === player2.age ?
        player1.score - player2.score :
        player1.age - player2.age
    );

    const dp = new Array(SIZE).fill(0);

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (players[j].score <= players[i].score) {
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] += players[i].score;
    }
    return Math.max(...dp)
};

console.log(bestTeamScore(
    [1, 3, 5, 10, 15],
    [1, 2, 3, 4, 5]
));

console.log(bestTeamScore(
    [4, 5, 6, 5],
    [2, 1, 2, 1]
));

console.log(bestTeamScore(
    [1, 2, 3, 5],
    [8, 9, 10, 1]
));
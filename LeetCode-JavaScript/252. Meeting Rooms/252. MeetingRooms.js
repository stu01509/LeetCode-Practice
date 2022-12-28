const canAttendMeetings = function (intervals) {
    intervals.sort((i1, i2) => i1[0] - i2[0]);

    for (let i = 1; i < intervals.length; i++) {
        const i1 = intervals[i - 1];
        const i2 = intervals[i];

        if (i1[1] > i2[0]) {
            return false;
        }
    }
    return true;
};

console.log(canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20]
]));
console.log(canAttendMeetings([
    [7, 10],
    [2, 4]
]));
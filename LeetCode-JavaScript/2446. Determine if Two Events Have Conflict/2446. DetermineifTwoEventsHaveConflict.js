/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
const haveConflict = function (event1, event2) {

    const firstEventStartTime = event1[0];
    const firstEventEndTime = event1[1];
    const secondEventStartTime = event2[0];
    const secondEventEndTime = event2[1];

    const firstEventStartMin = Number.parseInt(firstEventStartTime.split(':')[0]) * 60 + Number.parseInt(firstEventStartTime.split(':')[1]);
    const firstEventEndMin = Number.parseInt(firstEventEndTime.split(':')[0]) * 60 + Number.parseInt(firstEventEndTime.split(':')[1]);
    const secondEventStartMin = Number.parseInt(secondEventStartTime.split(':')[0]) * 60 + Number.parseInt(secondEventStartTime.split(':')[1]);
    const secondEventEndMin = Number.parseInt(secondEventEndTime.split(':')[0]) * 60 + Number.parseInt(secondEventEndTime.split(':')[1]);

    if (secondEventStartMin < firstEventStartMin) {
        if (secondEventEndMin < firstEventStartMin) {
            return false;
        }
        return true;
    } else {
        if (firstEventEndMin >= secondEventStartMin) {
            return true;
        }
        return false;
    }
};

console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"]));
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"]));
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"]));
console.log(haveConflict(["14:13", "22:08"], ["02:40", "08:08"]));
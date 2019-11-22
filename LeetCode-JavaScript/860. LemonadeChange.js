/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
    const coin = {
        '5': 0,
        '10': 0,
        '20': 0,
    };
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            coin['5']++;
        }
        if (bills[i] === 10) {
            coin['10']++;
            if (coin['5'] <= 0) {
                return false;
            } else {
                coin['5']--;
            }
        }
        if (bills[i] === 20) {
            coin['20']++;
            if (coin['10'] !== 0) {
                if (coin['5'] === 0) {
                    return false;
                } else {
                    coin['10']--;
                    coin['5']--;
                }
            } else {
                if (coin['5'] < 3) {
                    return false
                } else {
                    coin['5'] -= 3;
                }
            }
        }
    }
    return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10]));
console.log(lemonadeChange([10, 10]));
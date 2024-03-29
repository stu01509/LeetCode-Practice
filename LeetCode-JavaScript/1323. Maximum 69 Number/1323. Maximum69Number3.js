/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
    const map = {
        6: 9,
        9: 9,
        66: 96,
        69: 99,
        96: 99,
        99: 99,
        666: 966,
        669: 969,
        696: 996,
        699: 999,
        966: 996,
        969: 999,
        996: 999,
        999: 999,
        6666: 9666,
        6669: 9669,
        6696: 9696,
        6699: 9699,
        6966: 9966,
        6969: 9969,
        6996: 9996,
        6999: 9999,
        9666: 9966,
        9669: 9969,
        9696: 9996,
        9699: 9999,
        9966: 9996,
        9969: 9999,
        9996: 9999,
        9999: 9999
    }
    return map[num];
}

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
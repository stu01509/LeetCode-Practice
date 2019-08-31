/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
    let addr = '';
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            addr += '[.]';
        } else {
            addr += address[i];
        }
    }
    return addr;
};

console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));

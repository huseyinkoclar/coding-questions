/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (reversed > 2 ** 31 - 1) return 0;
    return reversed * sign;

};

console.log(reverse(123))
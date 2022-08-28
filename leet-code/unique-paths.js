/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 let uniquePaths = function(m, n) {
    var T = n+m-2;
    var r = m-1;
    var result = 1;
    for( var i = 1; i<=r; i++){
        result = result * (T - r + i)/i;
    }
    return result;
};
var m = 7, n = 3;
console.log(uniquePaths(m,n))


//(m+n)! / (m! * n!)
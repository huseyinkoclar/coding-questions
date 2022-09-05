/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    var tempMatrix=[];
    for(var i = 0; i<matrix.length; i++){
        var arr = [];
        for(var j = matrix.length-1; j >= 0; j--){
            arr.push(matrix[j][i]);
        }
        tempMatrix.push(arr);
    }
    for(var i = 0; i<matrix.length; i++)
        matrix[i] = tempMatrix[i];
};

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
//           [[7,4,1],[8,5,2],[9,6,3]]
//matrix = rotate(matrix);
rotate(matrix)
console.log(matrix);
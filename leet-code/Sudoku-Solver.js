/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    fillBoard(board)
};

var fillBoard = function(board) {
    for(var i = 0; i<board.length; i++){
        for(var j = 0; j<board.length; j++){
            if(board[i][j] == '.'){
                for(var k = 1; k<board.length+1; k++){
                    if(isValid(board,i,j,k.toString())){
                        board[i][j] = k.toString();
                        if(fillBoard(board)) return true;
                        else board[i][j] = '.';
                    }
                }
                
            return false
            }
        }
    }
    return true;
};

var isValid = function(board, row, column, value){
    for(var i = 0; i<board.length; i++){
        if(board[row][i] == value) return false
        if(board[i][column] == value) return false
        
    }


    //The “double tilde” (~~) operator is a double NOT Bitwise operator
    var x = ~~(row / 3) * 3;
    var y = ~~(column / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[x + i][y + j] == value) {
                return false;
            }
        }
    }
    return true;
}

/*
var checkBoard = function(board){
    for ( var i = 0; i<board.length; i++){
        if(findInteger(findDuplicates(board[i])))
            return false;
    }
    return true;
};




const findInteger = (arr = []) => {
    const isInteger = num => {
       return typeof num === 'number';
    };
    const el = arr.find(isInteger);
    return !!el;
};

const arrayColumn = (arr, n) => arr.map(x => x[n]);
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
*/

var board = [["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]];

solveSudoku(board)
console.log(board)

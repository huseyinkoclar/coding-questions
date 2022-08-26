/**
 * @param {character[][]} board
 * @return {boolean}
 */


 var isValidSudoku = function(board) {
    return checkSquare(board) && checkRow(board) && checkColumn(board)
};

let checkSquare = function(board) {
    var group0 = [board[0] , board[1] , board[2]];
    var group1 = [board[3] , board[4] , board[5]];
    var group2 = [board[6] , board[7] , board[8]];
    return x3check(group0) && x3check(group1) && x3check(group2);
};

let x3check = function(board) {
    var group0 = [];
    var group1 = [];
    var group2 = [];
    for(let i = 0; i<3; i++){
        for(let j = 0; j<board[i].length; j++){
            if( j < 3)  group0.push(board[i][j]);
            else if (j < 6) group1.push(board[i][j])
            else group2.push(board[i][j])
        }
    }
    return allEqual(findDuplicates(group0)) && allEqual(findDuplicates(group1)) && allEqual(findDuplicates(group2));
};

let checkRow = function(board){
    for(let i = 0; i<board[0].length; i++){
        //var duplicates = findDuplicates(board[i]);
        //var isAllEqual = allEqual(duplicates);
        if(!allEqual(findDuplicates(board[i])))
            return false;
    }
    return true;
};

let checkColumn = function(board){
    for(let i = 0; i<board.length; i++){
        //var column = arrayColumn(board,i)
        //var duplicates = findDuplicates(column);
        //var isAllEqual = allEqual(duplicates);
        if(!allEqual(findDuplicates(arrayColumn(board,i))))
            return false;
    }
    return true;
};

const arrayColumn = (arr, n) => arr.map(x => x[n]);
const allEqual = arr => arr.every( v => v === arr[0] );
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);


//example input
var sudoku = [[".",".",".",".","5",".",".","1","."]
            ,[".","4",".","3",".",".",".",".","."]
            ,[".",".",".",".",".","3",".",".","1"]
            ,["8",".",".",".",".",".",".","2","."]
            ,[".",".","2",".","7",".",".",".","."]
            ,[".","1","5",".",".",".",".",".","."]
            ,[".",".",".",".",".","2",".",".","."]
            ,[".","2",".","9",".",".",".",".","."]
            ,[".",".","4",".",".",".",".",".","."]]
console.log(isValidSudoku(sudoku))


var secondMax = function (arr) {
    var max = 0;
    var secondMax = 0; 
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
    }
    return secondMax;


}



console.log(secondMax([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])) // 10
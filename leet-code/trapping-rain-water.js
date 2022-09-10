/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    var start = findStart(height);
    var end = findEnd(height);
    height = minimizeMap(start, end, height);
    
    return calculate(height);
};

var findStart = function(height){
    var number;
    for(var i = 0; i<height.length; i++){
        if(height[i] > 0 && height[i+1] < height[i]){
            number = i;
            break;
        }
    }
    return number
}

var findEnd = function(height){
    for(var i = height.length-1; i >= 0; i--){
        if(height[i] > 0 && height[i-1] < height[i]){
            number = i;
            break;
        }
    }
    return number
}

var minimizeMap = function(start, end, height){
    var map = height.slice(start, end+1);
    return map;
}


var calculate = function(map){
    if(map == "") return 0;
    var rain = 0;
    var max = Math.max(...map);
    var maxIndex = map.indexOf(max);
    var secondMaxIndex = map.indexOf(nextBiggest(map));
    var secondMax = map[secondMaxIndex];
    if(maxIndex == secondMaxIndex) secondMaxIndex = map.indexOf(secondMax, maxIndex+1);
    var tempArr;
    if(maxIndex > secondMaxIndex){
        tempArr = map.slice(secondMaxIndex, maxIndex);
        map = map.slice(0, secondMaxIndex+1).concat(map.slice(maxIndex+1, map.length));
    }
    else {
        tempArr = map.slice(maxIndex+1, secondMaxIndex+1);
        map = map.slice(0, maxIndex+1).concat(map.slice(secondMaxIndex+1, map.length));
    }
    for(var i = 0; i<tempArr.length; i++){
        rain += secondMax - tempArr[i];
    }
    return rain + calculate(map);
}
//nextbiggerda hata var en büyük 2. sayıyı buluyor en büyük sayıdan 2 tane varsa onu bulması gerekli
function nextBiggest(arr) {
    var max = Math.max(...arr);
    var maxIndex = arr.indexOf(max);
    //new array without max
    var newArr = arr.slice(0, maxIndex).concat(arr.slice(maxIndex+1, arr.length));
    var secondMax = Math.max(...newArr);
    return secondMax;
  }

var rain = 0;

height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    var start = findStart(height);
    var end = findEnd(height);
    var rain = findRain(start, end, height);
};

var findStart = function(height){
    var number;
    for(var i = 0; i<height.length; i++){
        if(height[i] > 0 && height[i+1] < height[i]){
            console.log("start: " + i);
            number = i;
            break;
        }
    }
    return number
}

var findEnd = function(height){
    for(var i = height.length-1; i >= 0; i--){
        if(height[i] > 0 && height[i-1] < height[i]){
            console.log("end: " + i);
            number = i;
            break;
        }
    }
    return number
}

var findRain = function(start, end, height){
    var arr = height.slice(start, end+1);
    var max = Math.max(...arr);
    var maxIndex = arr.indexOf(max);
    var left = arr.slice(0, maxIndex);
    var right = arr.slice(maxIndex+1, arr.length+1);
    console.log(left)
    console.log(right)

    
    return number
}



height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));
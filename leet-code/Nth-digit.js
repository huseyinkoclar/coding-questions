/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
    var totalDigit = 0
    var counter = 1
    var keepDigit
    if(n>89){
        totalDigit = 98
        while(n>totalDigit){
            totalDigit = (totalDigit*10+9) * 2
        }
        totalDigit = (totalDigit-9)/10
        counter = totalDigit + Math.pow(10, (totalDigit.toString().length-1)) + 1 
    }
    else if(n>9) {totalDigit =9; counter = 10}
    else counter = 1;

    while(totalDigit < n){
        keepDigit = counter.toString().length 
        totalDigit += keepDigit 
        counter++;
    }
    totalDigit -= keepDigit
    counter--;
    return counter.toString()[n-totalDigit-1]
};

var forMoreFaster = function(n) {

}

console.log(findNthDigit(903))


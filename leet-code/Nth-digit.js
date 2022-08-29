/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
    var holder = 0
    var totalDigit = 0
    var counter = 1
    var keepDigit = 0
    var number = 0
    while(n>keepDigit){
        holder = keepDigit
        keepDigit += 9 * Math.pow(10,counter-1) * (counter)
        counter++;
        console.log(keepDigit)
    }
    counter -= 2;
    keepDigit = holder;
    number = Math.pow(10,counter)
    console.log(number)
    

    while(keepDigit < n){
        totalDigit = number.toString().length 
        keepDigit += totalDigit 
        number++;
    }
    keepDigit -= totalDigit
    number--;
    return number.toString()[n-keepDigit-1]
};


console.log(findNthDigit(234))


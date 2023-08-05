/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var result = [];
    nums.forEach(element => {
        if(!result.includes(element)){
            result.push(element);
        }
    });
    for(var i = 0; i<result.length; i++){
        nums[i] = result[i];
    }
    return result.length;
};

var nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
console.log(nums);

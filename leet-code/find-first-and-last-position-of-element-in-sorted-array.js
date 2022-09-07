/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    var holder;
    var number = [];
    for(var i = 0; i<nums.length; i++){
        if(nums[i] == target){
            number.push(i)
            holder = i;
            break;
        }
    }
    for(var i = nums.length-1; i>holder; i--){
        if(nums[i] == target){
            number.push(i)
            break;
        }
    }
    if(number.length==1) number.push(number[0])
    else if(number.length==0) {number.push(-1); number.push(-1)}
    return number
};


nums = [1], target = 1;
console.log(searchRange(nums,target))
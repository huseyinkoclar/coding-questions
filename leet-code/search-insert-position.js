/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(var i = 0; i<nums.length; i++){
        if(nums[i] == target) return i;
        else if(nums[i] > target) return i-1;
    }
};


console.log(searchInsert([1,3,5,6], 5))
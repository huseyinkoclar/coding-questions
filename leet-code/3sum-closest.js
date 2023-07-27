/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result = Math.max();
    nums.sort((a, b) => a - b);
    for(var i = 0; i<nums.length-2; i++){
        for(var j = i+1; j<nums.length-1; j++){
            for(var k = j+1; k<nums.length; k++){
                var hold = Math.abs(nums[i] + nums[j] + nums[k] - target);
                var old = Math.abs(result - target);
                if(hold < old)
                result = nums[i] + nums[j] + nums[k];
            }
        }
    }
    return result;
};




console.log(threeSumClosest([-1,2,1,-4], 1))
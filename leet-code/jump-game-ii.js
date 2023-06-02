/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var jumps = 0;
    var maxReach = 0;
    var steps = 0;
    for(var i = 0; i < nums.length-1; i++){
        maxReach = Math.max(maxReach, i+nums[i]);
        if(steps == 0){
            steps = maxReach - i;
            jumps++;
        }
        steps--;
    }
    return jumps;
};





console.log(jump([2,3,1,1,4]));
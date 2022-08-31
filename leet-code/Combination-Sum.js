/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var result = [];
 var combinationSum = function(candidates, target) {
    helper(candidates, target, [], result);
    return result;
};

var helper = function(candidates, target, current, result) {
    if (target < 0) {
        return;
    }
    if (target == 0) {
        result.push(current);
        return;
    }
    for (var i = 0; i < candidates.length; i++) {
        helper(candidates.slice(i,candidates.length+1), target - candidates[i], current.concat(candidates[i]), result);
    }
} 



var candidates = [2,3,6,7];
var target = 7;
console.log(combinationSum(candidates, target));

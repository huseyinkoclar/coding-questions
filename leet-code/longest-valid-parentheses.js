/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    var holder = 0;
    var max = 0;
    var stack = [];
    var i = 0;
    while(i < s.length){
        if(s[i] == '('){
            stack.push(i);
        }else{
            if(stack.length == 0){
                i++;
                holder = i;
                continue;
            }
            stack.pop();
            if(stack.length == 0){
                max = Math.max(max, i + 1 - holder);
            }else{
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
        i++;
    }
    return max;
};



s = ")()())"
console.log(longestValidParentheses(s)) // 4
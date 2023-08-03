/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var result = "";
    var sign = true;
    for(var i = 0; i<s.length; i++){
        var check = parseInt(s[i]);
        if(s[i] == "-") sign = false;
        else if(!isNaN(parseInt(s[i]))) 
            result += parseInt(s[i]);
    }
    if(sign == false)
        result = parseInt(result) - (parseInt(result) * 2);
    
    return parseInt(result);
};

console.log(myAtoi(" + 314"));
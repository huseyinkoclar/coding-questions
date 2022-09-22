/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var prefix = "";
    var i = 0;
    var j = 0;
    var flag = true;
    if(strs.length == 0) return "";
    if(strs.length == 1) return strs[0];
    while(flag){
        if(strs[i][j] == strs[i+1][j] && strs[i][j] != undefined){
            if(i == strs.length-2){
                prefix += strs[i][j];
                i = 0;
                j++;
            }
            else i++;
        }
        else flag = false;
    }
    return prefix;
    
};



strs = ["",""]
console.log(longestCommonPrefix(strs));
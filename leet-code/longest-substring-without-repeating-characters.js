/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    result = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (temp.indexOf(s[j]) === -1) {
                temp += s[j];
            } else {
                break;
            }
        }
        if (temp.length > result) {
            result = temp.length;
        }
    }
    return result;
};



console.log(lengthOfLongestSubstring("bbbbbb"))
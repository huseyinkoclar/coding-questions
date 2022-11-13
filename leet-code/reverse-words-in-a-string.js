/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    var sentence = s.split(' ');
    var value = '';
    sentence = sentence.filter(function(item) {
        return item !== value
    })
    console.log(sentence);
    var reverse = "";
    sentence.slice().reverse().forEach((word) => {
        // append the word to the reverse string
        reverse += word + " ";   
    });
    return reverse.substring(0, reverse.length - 1);
};



var s = "  hello world  "
console.log(reverseWords(s))
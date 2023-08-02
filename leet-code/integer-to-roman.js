/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    if (num <= 0 || num >= 4000) {
      throw new Error('Number out of range (1-3999)');
    }
    const romanNumerals = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1
    };
    let result = '';
    for (const romanNumeral in romanNumerals) {
      while (num >= romanNumerals[romanNumeral]) {
        result += romanNumeral;
        num -= romanNumerals[romanNumeral];
      }
    }
  
    return result;
  }



console.log(intToRoman(1994))
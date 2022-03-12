function translatePigLatin(str) {
    let vowelRegex = /[aeiou]/gi;
    let pigLatin = '';
  
    if(str[0].match(vowelRegex)) {
      str.slice(1);
      pigLatin = str + 'way';
    } else if (str.match(vowelRegex) === null) {
      pigLatin = str + "ay";
    } else {
      let vowelIndice = str.indexOf(str.match(vowelRegex)[0]);
  
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return pigLatin;
  }
  
  
  translatePigLatin("consonant");
function translatePigLatin(str) {
    let vowelRegex = /[aeiou]/gi;
    let consonatRegex = /[(?![aeiou])[a-z]]/gi;
  
    if(consonantRegex.test(str)) {
      str.slice(1);
      str = str + 'ay';
    } 
    if(vowelRegex.test(str)) {
      str.slice(1);
      str = str + 'way';
    }
  
    return str;
  }
  
  translatePigLatin("consonant");
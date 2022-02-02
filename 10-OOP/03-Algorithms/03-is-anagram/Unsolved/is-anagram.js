// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    if(strA.length !== strB.length) {
        return false;
    };

    let aLetterMap = {};
    let bLetterMap = {};
    
    for (let i = 0; i < strA.length; i++) {
        let aLetter = strA[i];
        let bLetter = strB[i];

        aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
        bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
        console.log(aLetterMap)
        
    }
    for (var key in aLetterMap) {
        if (aLetterMap[key] !== bLetterMap[key]) {
          return false;
        }
    }
    return true;

};

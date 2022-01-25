// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    let strArr = str.split(' ');
    let result = []
    result.push(strArr[0].charAt(0).toLowerCase());
    for (let i = 1; i < strArr.length; i++) {
        let word = strArr[i];
        for (let j = 0; j < word.length; j++) {
            if(j === 0) {
                word[0] = word[0].toUpperCase();
            } else {
                word[j] = word[j]
            }
            
        }
        
        result.push(word);        
    }
    console.log(result.join(''));
    return result.join('')
};

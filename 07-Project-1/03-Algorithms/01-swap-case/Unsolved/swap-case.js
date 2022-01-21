// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
    let strArr = str.split('')
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i] === strArr[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase();
        } else if ( strArr[i] === strArr[i].toUpperCase()) {
            strArr[i] = strArr[i].toLowerCase();
        }        
    }
    return strArr.join('')
};

// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function(str) {
    let result = '';

    for(let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];
        result += letter;
    }
    return result
};

// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    let strArr = str.split(' ');
    let result = []
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        console.log(word);
        if(i === 0) {
            word = strArr[0].charAt(0).toLowerCase()
            result.push(word);
        }
        
        
        result.push(word);        
        
    }
    console.log(result.join(''));
    return result.join('')
};

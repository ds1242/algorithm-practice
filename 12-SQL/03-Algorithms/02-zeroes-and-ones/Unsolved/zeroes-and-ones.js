// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    let strArr = str.split('');
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i] == 0) {
            zeroCount++
        } else if(strArr[i] == 1) {
            oneCount++;
        }        
    };
    // if(zeroCount == oneCount) {
    //     return true;
    // } else {
    //     return false;
    // }
    return zeroCount == oneCount
};

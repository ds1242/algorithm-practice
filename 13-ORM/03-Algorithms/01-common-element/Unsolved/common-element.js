// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    let commonNum
    for (let i = 0; i < arrA.length; i++) {
        let currentNum1 = arrA[i];
        for (let j = 0; j < arrB.length; j++) {
            let currentNum2 = arrB[j];
            if(currentNum1 === currentNum2) {
                commonNum = currentNum1;
            }
        }

        
    }
    return commonNum;
};

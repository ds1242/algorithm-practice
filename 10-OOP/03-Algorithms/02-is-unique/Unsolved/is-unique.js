// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let output = true;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if(currentNum === arr[j] && j !== i) {
                output = false;
            }
            
        }
        
    }
    return output;

};

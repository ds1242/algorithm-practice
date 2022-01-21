// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    let wordsArr = str.split(' ');
    
    let longest = 0;
    let currentCount = 0;
    let longestWord;
    
    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i].split('');
        // console.log(word)
        
        for (let j = 0; j < word.length; j++) {
            currentCount = currentCount + 1;
            // console.log(currentCount)
        } 
        if(currentCount > longest) {
            longest = currentCount;
            longestWord = wordsArr[i];
            // console.log(longest)
        }
        currentCount = 0;    
        // console.log(longestWord)       
    }
    return longestWord;
};

// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    let nArr = n.toString();
    let currentDigit = nArr[0];
    let currentCount = 1;
    let result = ''
    for (let i = 1; i <= nArr.length; i++) {
        const digit = nArr[i];
        if(digit === currentDigit) {
            currentCount++;
        } else {
            result += currentCount;
            result +=currentDigit;
            currentCount = 1;
            currentDigit = digit;
        }
        
    }

    console.log(result);
    return parseInt(result);
};

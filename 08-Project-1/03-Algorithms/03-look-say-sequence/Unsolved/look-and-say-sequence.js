// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    let nArr = n.toString().split('')
    let realNArr = nArr.map(Number);
    let output = [];
    let currentCount = 1;
    let currentDigit = realNArr[0];
    for (let i = 0; i < realNArr.length; i++) {
        if (realNArr[i] === realNArr[i - 1]) {

        }
        
    }
    console.log(realNArr);
};

// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0;
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if(/^[aeiou]/.test(strArr[i].toLowerCase()) === true) {
            count += 1;
        }        
    }
    console.log(count);
    return count;
};

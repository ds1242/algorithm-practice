// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let reverseStr = str.split('').reverse().join('');
    if (str === reverseStr) {
        return true;
    } else {
        return false;
    }
};

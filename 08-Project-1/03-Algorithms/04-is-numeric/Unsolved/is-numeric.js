// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
    const regex = new RegExp('/^[+-?][^a-zA-Z]+/g');

    if(regex.test(str) === false) {
        return false;
    } else {
        return true;
    }

    

};

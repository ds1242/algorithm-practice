// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

const isPerfectSquare = function(num) {
    let i = 0;
    while(true) {
        let currentSqure = i * i;

        if (currentSqure === num) {
            return true;
        } else if (currentSqure > num) {
            return false;
        } else {
            i++;
        }
    }

};

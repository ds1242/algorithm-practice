// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let total = 1;
    for(let i = num; i > 0; i--) {
        total = total * (i);
    }
    console.log(total);
    return total;
};

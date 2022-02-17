// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false
// loop through the array selecting an element
// take an element of the array
// multiply by every other element in 

var multiplyInto20 = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = array[i];
        
    }

};




// function minimizeBias(ratings) {
//     // Write your code here
    
//     // if array is only 1 element return 0
//     if(ratings.length === 1) {
//         return 0;
//     }
//     // sort the array
//     ratings.sort();
    
//     // set difference of the first two elements in the array
//     let difference = ratings[1] - ratings[0];
//     let bias = 0;
//     console.log(ratings);
//     for(let i = 2; i < ratings.length; i++) {
//         difference = Math.min(difference, ratings[i] - ratings[i-1])
//         if(difference > 0 && difference !== (ratings[i] - ratings[i - 1])){
//             bias = bias++;
//         } else if (difference === (ratings[i] - ratings[i - 1])){
//             bias = bias + difference;
//         }
//         console.log(bias);
//     }
//     return bias;
// }
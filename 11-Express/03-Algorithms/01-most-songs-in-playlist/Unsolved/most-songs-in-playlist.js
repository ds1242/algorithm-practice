// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

// var noMoreThanPrevious = function(str) {
//   var letterCount = {};

//   var currentLetter = arr[0];
//   var prevLetter;
//   for (var i = 1; i < str.length; i++) {
//     var letter = str[i];
//     letterCount[letter] = (letterCount[letter] || 0) + 1;

//     if (prevLetter) {
//       if (letterCount[letter] > letterCount[letter]) {
//         return false;
//       }
//     }
//   }
// };

let mostSongsInPlaylist = function(arr) {
    let sortedArr = arr.sort();
    let totalMins = 0;
    let totalSongs = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        let currentSongDurartion = sortedArr[i];
        if(totalMins + currentSongDurartion <= 60) {
            totalMins += currentSongDurartion;
            totalSongs++;
        } else {
            return totalSongs;
        }
        
    }
    return totalSongs;
};

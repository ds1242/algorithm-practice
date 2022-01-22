// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    let words = str.split(' ');
    let acronym = [];

    for (let i = 0; i < words.length; i++) {

        let word = words[i].split('');

        if(word[0]) {
            acronym.push(word[0]);
        }
        
    }

    return acronym.join('').toUpperCase();
};

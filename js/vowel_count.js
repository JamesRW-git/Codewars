"use strict";

// Return the number (count) of vowels in the given string.
//
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

//my solution
function getCount(str) {
    var vowelsCount = 0;
    let arr = [];
    arr = (str.toLowerCase()).split('');
    arr.forEach(function(char) {
        if(char === 'a' || char === 'e' || char === 'i' ||
            char === 'o' || char === 'u'){
            return vowelsCount++;
        }
    })
    return vowelsCount;
}

console.log(getCount('abracadabra'));

//much shorter solution
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }



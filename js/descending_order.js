"use strict";


//My answer
//Converted to an array of strings, sorted, and joined back together as a number
function descendingOrder(n) {
    const arr = Array.from(String(n), Number);
    const highestToLowest = Number((arr.sort((a,b) => b - a)).join(''));
    return highestToLowest;
}

//Top answer on CodeWars
//Took the string, split into an array, sorted, reversed, then joined back together as a number
//Primary difference? No need for declaring additional variables and less code

//function descendingOrder(n){
//    return parseInt(String(n).split('').sort().reverse().join(''))
//}

console.log(descendingOrder(12345));

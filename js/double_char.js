"use strict";

function doubleChar(str) {
    let doubled = '';
    for (let i = 0; i < str.length; i++) {
        doubled += str.charAt(i) + str.charAt(i);
    }
    return doubled;
}

console.log(doubleChar("Cheese"));
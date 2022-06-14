"use strict";

function removeChar(str){
    let newStr = '';
    for (let i = 1; i < str.length - 1; i++) {
        newStr += str.charAt(i);
    }
    return newStr;
}

console.log(removeChar("James"));
console.log(removeChar("Haley"));



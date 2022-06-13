"use strict";

function even_or_odd(number) {
    if(number % 2 !== 0) {
        return "Odd";
    } else {
        return "Even";
    }
}


console.log(even_or_odd(5));
console.log(even_or_odd(4));
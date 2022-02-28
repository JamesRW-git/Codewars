"use strict";

//Complete the function that takes a non-negative integer n as input,
//and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

//My answer

function powersOfTwo(n){
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i)
    }
    return arr;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
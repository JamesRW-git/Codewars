"use strict";

let inputNum = [1, 5.2, 4, 0, -1];

// Sum Numbers
function sum (numbers) {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }
    return num;
}

console.log(sum(inputNum));

function sumForEach(numbers) {
    let num = 0;
    numbers.forEach(function(number){
        num += number;
    })
    return num;
}

console.log(sumForEach(inputNum));
"use strict";

//Your classmates asked you to copy some paperwork for them.
//You know that there are 'n' classmates and the paperwork has 'm' pages.
//
//Your task is to calculate how many blank pages do you need.
//If n < 0 or m < 0 return 0.
//
//Examples:
//          n= 5, m=5: 25
//          n=-5, m=5:  0

//My answer: it works
function paperwork(n, m) {
    let students = n;
    let pages = m;
    if (students <= 0) {
        students = 0;
    }
    if (pages <= 0) {
        pages = 0;
    }
    return console.log(students * pages);
}

paperwork(5,5);
paperwork(-5,5);

//Top answer from Codewars
//Shorter, no variable assignments. Looks clean
// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }
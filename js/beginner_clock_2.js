"use strict";

function past(h, m, s){
    let millisecondsSinceMidnight = 0;
    return millisecondsSinceMidnight = (h * 3600000) + (m * 60000) + (s * 1000);
}



console.log(past(1, 1, 1));
console.log(past(0,0,1));
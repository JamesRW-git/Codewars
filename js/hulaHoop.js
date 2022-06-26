"use strict";

function hoopCount (n) {
    let response = "";
    if (n >= 10) {
        response = "Great, now move on to tricks";
    } else {
        response = "Keep at it until you get it";
    }
    return response;
}

console.log(hoopCount(10))
console.log(hoopCount(3))
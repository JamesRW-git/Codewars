"use strict";

function greet (name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}

console.log(greet("Chris", "Chris"));

console.log(greet("Chris", "James"));
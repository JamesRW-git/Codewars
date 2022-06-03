"use strict"

let nameToShuffle = "James Woodward";


function nameShuffler(str){
    let nameToArray = str.split(" ");
    let secondName = nameToArray[0];
    let firstName = nameToArray[1];
    return firstName + " " + secondName;
}

console.log(nameShuffler(nameToShuffle));


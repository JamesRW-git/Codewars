"use strict";

let sentenceToSmash = ["hello", "world", "is", "fundamental"];
let sentenceToSmash2 = ["hello", "world"];

function smash(words) {
    let smashedSentence = "";
    for (let i = 0; i < words.length; i++) {
        smashedSentence = smashedSentence + words[i] + " ";
    }
    return smashedSentence.trim();
}

console.log(smash(sentenceToSmash));

function removeExclamationMarks(s) {
    let strArr = s.split('');
    let noExclamationArr = [];
    strArr.forEach(function(letter) {
        if (letter !== '!') {
            noExclamationArr.push(letter);
        }
    })
    return noExclamationArr.join('');
}

function removeExclamationMarksAgain(s) {
    return s.replace('!', '');
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarksAgain("Hello World!"));
"use strict";

//For every good kata idea there seem to be quite a few bad ones!

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

//my answer
let array = ['bad', 'bad', 'bad'];

function well(x) {
    let g = 0;
    x.forEach(function (word, index) {
        if (word === 'good') {
            g++;
        }
    })
    if(g === 0) {
        return console.log('Fail!');
    } else if(g > 0 && g <= 2) {
        return console.log('Publish!');
    } else if (g > 2) {
        return console.log('I smell a series!');
    }
}

well(array);

//shorter and top answer

// const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' :
//         good_count < 3 ? 'Publish!' : 'I smell a series!';
// }










/*
var map = a.reduce(function(obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
}, {});

console.log(map);

function well(array){
    let goodCount = map.getAttribute('good');
    let badCount = map.getAttribute('bad');
    console.log(goodCount);
    console.log(badCount);
}
*/

"use strict";

function longest(s1, s2) {
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    let mergedArr = [];
    for (let i = 0; i < s1Arr.length || i < s2Arr.length; i++) {
        if(i < s1Arr.length && !mergedArr.includes(s1Arr[i])) {
            mergedArr.push(s1Arr[i]);
        }
        if(i < s2Arr.length && !mergedArr.includes(s2Arr[i])) {
            mergedArr.push(s2Arr[i]);
        }
    }
    return mergedArr.sort().join('');
}

//Better answer:
//const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
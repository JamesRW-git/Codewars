"use strict";

function getMiddle(s)
{
    let result = "";
    let splitArray = s.split('');
    if(splitArray.length % 2 !== 0) {
       result = s.charAt(splitArray.length / 2 - .5);
    } else {
        result = s.charAt(splitArray.length / 2 - .5) + s.charAt(splitArray.length / 2 + .5);
    }
    return result;
}



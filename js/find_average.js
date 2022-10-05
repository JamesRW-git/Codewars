"use strict";

function find_average(array) {
    let averaged = 0;
    if (array.length > 0){
        // array.forEach(function (number){
        //     averaged += number;
        // })
        for (let i = 0; i < array.length; i++) {
            averaged += array[i]
        }
        return averaged/array.length
    } else {
        return 0;
    }
}
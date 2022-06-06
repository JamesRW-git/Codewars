"use strict";

function toCamelCase(str) {
    let stringArray = [];
    let camelCased = '';

    if (str.includes('-')) {
        stringArray = str.split('-');
    } else if (str.includes('_')) {
        stringArray = str.split('_');
    }

    if(str.charAt(0) === str.charAt(0).toUpperCase()) {
        return stringArray.map(element => {
            return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
        }).join('');
    } else {
        camelCased =  stringArray.map(element => {
            return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
        }).join('');
        return camelCased.charAt(0).toLowerCase() + camelCased.substring(1);
    }
}

console.log(toCamelCase('free-chrif-today'));
console.log(toCamelCase('Free_chrif_today'));


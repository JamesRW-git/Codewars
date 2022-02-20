"use strict";

//My answer works in node and in browser, but not through Codewars. Not sure why.
function hello(name) {
    return console.log('Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!');
}

hello('jamEs');
hello('haley');
hello('hAlEy');
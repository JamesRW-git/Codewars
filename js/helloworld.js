"use strict";

//My answer works in node and in browser, but not through Codewars. Not sure why.
//Update: It works now if I remove the console logs. I guess there was an early test case
//for outputting 'Hello, World!' for being passed an empty string or null that I
//was misinterpreting as failing for when an actual string was passed in
function hello(name) {
    if(name === '' || name == null) {
        return  console.log('Hello, World!');
    } else {
        return console.log('Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!');
    }
}

hello('jamEs');
hello('haley');
hello('hAlEy');
hello('');
hello();

//Alternative that I also tried when trying to figure out why tests kept failing
//  function hello(name) {
//      if(name !== '' && name != null){
//          let fixedName = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
//          return console.log('Hello, ' + fixedName + '!');
//      } else {
//          return console.log('Hello, World!');
//      }
//  }
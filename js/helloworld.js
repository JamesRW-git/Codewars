"use strict";

//My answer works in node and in browser, but not through Codewars. Not sure why.
// function hello(name) {
//     if(name === '' || name == null) {
//         return  console.log('Hello, World!');
//     } else {
//         return console.log('Hello, ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!');
//     }
// }

hello('jamEs');
hello('haley');
hello('hAlEy');
hello('');
hello();

//Tried taking the 'fixed' name and assigning it to a variae, errors out about charAt
 function hello(name) {
     if(name !== '' && name != null){
         let fixedName = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
         return console.log('Hello, ' + fixedName + '!');
     } else {
         return console.log('Hello, World!');
     }
 }
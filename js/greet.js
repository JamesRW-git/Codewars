// Make a simple function called greet that returns the most-famous "hello world!".
//
// Style Points
// Sure, this is about as easy as it gets.
// But how clever can you be to create the most creative hello world you can think of?
// What is a "hello world" solution you would want to show your friends?

//First attempt. Works on a single word input as a string
// function greet(input) {
//     return (typeof(input) === 'string' && input !== '') ? console.log('Hello, ' + input.charAt(0).toUpperCase()
//             + input.slice(1).toLowerCase() + '!') : console.log('Please provide a name as a string as input');
// }


//Second attempt. Works on any number of names as long as they are a string, else returns 'Hello, World!'
function greet(input) {
    if (typeof (input) === 'string' && input !== '') {
        let names = [];
        let fixedNames = '';
        names = input.split(" ");
        for (let i = 0; i < names.length; i++) {
            names.push(names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase());
            fixedNames = fixedNames + names.pop() + ' ';
        }
        return console.log('Hello, ' + fixedNames + '!');
    } else {
        return console.log('Hello, World!');
    }
}

greet('jAmEs robert WOODWARD');






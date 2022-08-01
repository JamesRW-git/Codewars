function abbrevName(name){
    return name.split(" ")[0].charAt(0).toUpperCase() + "." + name.split(" ")[1].charAt(0).toUpperCase();
}

//or
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

console.log(abbrevName("James Woodward"));
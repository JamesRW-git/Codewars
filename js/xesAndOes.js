function XO(str) {
    let x = 0;
    let o = 0;
    str.split('').forEach(function (char) {
        if (char === 'X' || char === 'x') {
            x++;
        } else if (char === 'O' || char === 'o') {
            o++;
        }
    })
    return (x === o);
}

console.log(XO("xxooo"));
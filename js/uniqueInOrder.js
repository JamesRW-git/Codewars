var uniqueInOrder=function(iterable){
    let unique = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) {
            unique.push(iterable[i]);
        }
    }
    return unique;
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
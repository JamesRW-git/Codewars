var summation = function (num) {
    let finalNum = num;
    for (let i = 1; i < num; i++) {
        finalNum = finalNum + i
    }
    return finalNum;
}

console.log(summation(8));
function findShort(s) {
    let arr = s.split(" ");
    return arr.sort(function (a, b) {
        return a.length - b.length;
    })[0].length
}

console.log(findShort("Bitcoin is amazing and incredibly awesome"))
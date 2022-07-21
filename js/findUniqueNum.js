function findUniq(arr) {
    return arr.find(function(value) {
        return arr.indexOf(value) === arr.lastIndexOf(value);
    }) || 0;
}


console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0, 1, 0]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));
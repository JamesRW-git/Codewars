function invert(array) {
    let arr = [];
    array.forEach(function(item) {
        arr.push(item * - 1);
    })
    return arr;
}
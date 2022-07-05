function moveZeros(arr) {
    let zeros = [];
    let sorted = []
    arr.forEach(function(item) {
        if (item === 0) {
            zeros.push(item);
        } else {
            sorted.push(item);
        }
    })
    zeros.forEach(function(zero) {
        sorted.push(zero);
    })
    return sorted;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
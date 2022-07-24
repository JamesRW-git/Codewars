function oddOrEven(array) {
    let sum = 0;
    array.forEach(function(num) {
        sum += num;
    })

}

console.log(oddOrEven([1]));;
console.log(oddOrEven([1023, 1, 2]));
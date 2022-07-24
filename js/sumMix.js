function sumMix(x){
    let sum = 0;
    x.forEach(function(num) {
        sum += parseInt(num);
    })
    return sum;
}

console.log(sumMix([9, 3, '7', '3']));
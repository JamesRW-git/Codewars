function oddOrEven(x){
    let sum = 0;
    x.forEach(function(num) {
        sum += parseInt(num);
    })
    return (sum % 2 === 0 ? 'even' : 'odd');
}
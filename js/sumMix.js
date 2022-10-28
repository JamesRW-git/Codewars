function oddOrEven(x){
    let sum = 0;
    // x.forEach(function(num) {
    //     sum += parseInt(num);
    // })
    for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i]);
    }
    return (sum % 2 === 0 ? 'even' : 'odd');
}
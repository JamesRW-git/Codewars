function fakeBin(x) {
   let notBinary = [];
    // x.split('').forEach(function(num) {
    //    if (num >= 5) {
    //       notBinary.push('1');
    //    } else {
    //       notBinary.push('0')
    //    }
    // })
    for (let i = 0; i < x.split('').length; i++) {
        if (x.split('')[i] >= 5) {
            notBinary.push('1');
        } else {
            notBinary.push('0');
        }
    }
   return notBinary.join('');
}

console.log(fakeBin('45385593107843568'));
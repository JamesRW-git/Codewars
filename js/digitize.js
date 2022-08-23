function digitize(n) {
    let arr = [];
    let nArr = n.toString().split('');
    for (let i = 0; i < nArr.length; i++) {
        arr.unshift(parseInt(nArr[i]));
    }
    return arr;
}

console.log(digitize(1234));
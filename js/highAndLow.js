function highAndLow(numbers){
    const arr = numbers.split(' ');
    const sortedArr = (arr.sort((a,b) => a - b));
    return sortedArr[sortedArr.length - 1] + " " + sortedArr[0];
}

console.log(highAndLow("1 9 3 4 -5"));
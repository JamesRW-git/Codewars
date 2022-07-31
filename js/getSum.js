// function getSum(a, b) {
//     let count = 0;
//     if(a < b) {
//         do {
//             count+= a;
//             a++;
//         } while (a <= b);
//         return count;
//     } else if(a > b) {
//         do {
//             count += b;
//             b++;
//         } while (a >= b);
//         return count;
//     } else {
//         return a;
//     }
// }

//Better
const getSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

// console.log(getSum(-1, 2));
console.log(getSum(0, 1));
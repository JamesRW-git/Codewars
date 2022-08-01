// function grow(x){
//     let returnNum = 1;
//     x.sort((a,b) => a - b).forEach(function(num) {
//         returnNum *= num;
//     })
//     return returnNum;
// }

//duh, this is better
const grow=x=> x.reduce((a,b) => a*b);


console.log(grow([1, 2, 3, 4]));
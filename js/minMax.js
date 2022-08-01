function minMax(arr){
    arr.sort((a,b) => a-b);
    return [arr[0],arr[arr.length-1]]; // fix me!
}

//better
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }

console.log(minMax([2334454, 5]));
function countSheeps(arrayOfSheep) {
    let count = 0;
    // arrayOfSheep.forEach(function(value) {
    //     if(value == true) {
    //         count++;
    //     }
    // })
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i] == true) {
            count++;
        }
    }
    return count;
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));
function rentalCarCost(d) {
    let total = 0;
    if (d >= 3 && d < 7) {
        total = 40 * d - 20;
    } else if (d >= 7){
        total = 40 * d - 50;
    } else {
        total = 40 * d;
    }
    return total;
}
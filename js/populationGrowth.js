function nbYear(p0, percent, aug, p) {
    let years = 0;
    console.log("Starting pop: " + p0);
    do {
        p0 += parseInt((p0 * (percent / 100)) + aug);
        years++;
        console.log("Year: " + years);
        console.log("New pop: " + p0);
    } while(p0 < p);
    return years;
}

// console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
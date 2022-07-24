function bouncingBall(h,  bounce,  window) {
    let bounces = 0;
    if (bounce < 1 && bounce > 0 && h > 0 && h > window) {
        do {
            bounces++;
            h = h * bounce;
        } while (h > window)
        return (bounces * 2 - 1);
    } else {
        return -1;
    }
}

console.log(bouncingBall(30.0, .5, 1.0))
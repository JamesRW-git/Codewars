var number = function(busStops){
    let peopleOnBus = 0;
    busStops.forEach(function(busStop) {
        peopleOnBus += busStop[0] - busStop[1];
    })
    return peopleOnBus;
}

console.log(number([[10, 0], [3, 5], [5, 8]]));
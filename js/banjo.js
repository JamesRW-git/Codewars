function areYouPlayingBanjo(name) {
    return (name.charAt(0) === 'r' || name.charAt(0) === "R" ? name + ' plays banjo' : name + ' does not play banjo');
}

console.log(areYouPlayingBanjo("James"));;
console.log(areYouPlayingBanjo("Robert"));;
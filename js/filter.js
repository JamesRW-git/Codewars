function filter_list(l) {
    let arr = [];
    for (let i = 0; i < l.length; i++) {
        if(typeof l[i] === "number" && l[i] >= 0) {
            arr.push(l[i]);
        }
    }
    return arr;
}

console.log(filter_list(["a", "b", 1, 2, 3, -1]));
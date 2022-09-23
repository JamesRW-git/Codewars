function twoSort(s) {
    let str = '';
    s.sort();
    for (let i = 0; i < s[0].length; i++) {
        if(i < s[0].length - 1) {
            str += s[0][i] + "***";
        } else {
            str += s[0][i];
        }
    }
    return str;
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
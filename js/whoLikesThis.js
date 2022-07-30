function likes(names) {
    let response = "";
    let num = 0;
    if(names.length < 1) {
        response +=  "no one likes this";
    }
    if(names.length === 1) {
        response += names[0] + " likes this";
    }
    if(names.length === 2) {
        response += names[0] + " and " + names[1] + " like this";
    }
    if(names.length === 3) {
        for (let i = 0; i < names.length; i++) {
            if(i === 0) {
                response += names[i] + ", ";
            } else if(i === 1) {
                response += names[i] + " "
            } else {
                response += "and " + names[i] + " like this";
            }
        }
    }
    if(names.length > 3) {
        for (let i = 0; i < names.length; i++) {
            if(i === 0) {
                response += names[i] + ", "
            }
            if(i === 1) {
                response += names[i];
            }
            if (i > 1) {
                num ++;
            }
        }
        response += " and " + num.toString() + " others like this";
    }
    return response;
}

//Use of a switch case would be better

console.log(likes(["James"]));
console.log(likes(["Haley", "Lauren"]));
console.log(likes(["Jack", "Jill", "Mark"]));
console.log(likes(["Kelly", "Annie", "Laura", "Juan"]));
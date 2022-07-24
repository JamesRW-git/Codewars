function domainName(url){
    if (url.slice(0, 4) === 'http') {
        if (url.split(".")[0].split("//")[1] !== "www") {
            return url.split(".")[0].split("//")[1];
        } else {
            return url.split(".")[1];
        }
    } else if(url.slice(0, 4) === 'www.') {
        return url.split(".")[1];
    } else {
        return url.split(".")[0];
    }
}

//A way better solution
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
// };

console.log(domainName("https://youtube.com"));
console.log(domainName("www.cheese.com"));
console.log(domainName("http://www.sqob1a6.co.za"));
console.log(domainName("czxr1s9.co.za/warez/"));
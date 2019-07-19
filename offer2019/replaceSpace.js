function replaceSpace(str) {
    var res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            res += "%20"
        }else {
            res += str[i]
        }
    }
    return res
}

console.log(replaceSpace("We are happy"));

module.exports = {
    replaceSpace: replaceSpace
};
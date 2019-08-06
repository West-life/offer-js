function rectCover(number) {
    if (number <= 0) {
        return 0;
    }
    if (number < 3) {
        return number;
    }
    return rectCover(number - 1) + rectCover(number - 2);
}

module.exports = {
    rectCover: rectCover
};
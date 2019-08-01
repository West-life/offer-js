function jumpFloor(number) {
    if (number <= 0) {
        return 0;
    }
    if (number < 3) {
        return number
    }
    return jumpFloor(number - 1) + jumpFloor(number - 2)
}

module.exports = {
    jumpFloor: jumpFloor
};
function Find(target, array) {
    if (array.length == 0) {
        return false
    }
    var row = 0, col = array[0].length - 1;
    while (row < array.length && col >= 0) {
        if (array[row][col] > target) {
            col--;
        } else if (array[row][col] < target) {
            row++;
        } else {
            return true;
        }
    }
    return false;
}

var  array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
var target = 7;
console.log(Find(target, array));

module.exports = {
    Find: Find
};
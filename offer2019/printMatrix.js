function printMatrix(matrix) {
    if (matrix == null || matrix.length === 0) {
        return;
    }
    let start = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let res = [];
    const set = new Set();
    while (start * 2 < rows && start * 2 < cols) {
        let endX = cols - start;
        let endY = rows - start;
        let row = start, col = start;
        while (col < endX) {
            res.push(matrix[row][col]);
            set.add(row + ":" + col);
            col++;
        }
        col--;
        row++;
        while (row < endY) {
            res.push(matrix[row][col]);
            set.add(row + ":" + col);
            row++;
        }
        row--;
        col--;
        while (col >= start && !set.has(row + ":" + col)) {
            res.push(matrix[row][col]);
            col--;
        }
        col++;
        row--;
        while (row > start && !set.has(row + ":" + col)) {
            res.push(matrix[row][col]);
            row--;
        }
        start++;
    }
    return res;
}

console.log(printMatrix([[1],[2],[3]]))

module.exports = {
    printMatrix: printMatrix
};
var data = [], minArray = [];

function push(node) {
    data.push(node)
    if (minArray.length === 0 || node < minArray[minArray.length - 1]) {
        minArray.push(node)
    } else {
        minArray.push(minArray[minArray.length - 1])
    }
}

function pop() {
    data.pop()
    minArray.pop()
}

function top() {
    return data[data.length - 1]
}

function min() {
    return minArray[minArray.length - 1]
}

module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};
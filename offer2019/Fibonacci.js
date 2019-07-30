function Fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let first = 0, second = 1, res = 0;
    for (let i = 2; i <= n; i++) {
        res = first + second;
        first = second;
        second = res;
    }
    return res;
}

module.exports = {
    Fibonacci: Fibonacci
};
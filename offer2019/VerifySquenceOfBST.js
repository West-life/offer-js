function VerifySquenceOfBST(sequence) {
    if (sequence.length === 0) {
        return false;
    }
    if (sequence.length < 3) {
        return true;
    }
    let root = sequence[sequence.length - 1];
    let i = 0;
    for (; i < sequence.length - 1; i++) {
        if (sequence[i] > root) {
            break;
        }
    }
    let j = i;
    for (; j < sequence.length - 1; j++) {
        if (sequence[j] < root) {
            return false;
        }
    }
    let left = true;
    if (i > 0) {
        left = VerifySquenceOfBST(sequence.slice(0, i));
    }
    let right = true;
    if (i < sequence.length - 1) {
        right = VerifySquenceOfBST(sequence.slice(i, sequence.length - 1));
    }
    return left && right;
}

console.log(VerifySquenceOfBST([7,4,6,5]));

module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};
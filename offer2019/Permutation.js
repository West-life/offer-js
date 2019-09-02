function Permutation(str) {
    if (str.length === 0) {
        return [];
    }
    let array = str.match(/./g);
    let set = new Set();
    permutation(array, 0, set);
    // set.forEach(a => console.log(a))
    return Array.from(set).sort();
}

function permutation(array, start, set) {
    let array2 = array.slice();
    for (let i = start; i < array2.length; i++) {
        let tmp = array2[i];
        array2[i] = array2[start];
        array2[start] = tmp;
        set.add(array2.join(""));
        // console.log(array2.join(""));
        permutation(array2.slice(), start + 1, set);
        array2 = array.slice();
    }
}

console.log(Permutation("abc"));

module.exports = {
    Permutation: Permutation
};
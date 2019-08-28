function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function FindPath(root, expectNumber) {
    let res = [];
    if (root === null) {
        return res;
    }
    dfsFind(root, expectNumber, [], res);
    return res;
}

function dfsFind(root, expectNumber, path, res) {
    path.push(root.val);
    if (expectNumber === root.val && root.left === null && root.right === null) {
        res.push(path.slice(0));
    }
    if (root.left !== null) {
        dfsFind(root.left, expectNumber - root.val, path, res);
    }
    if (root.right !== null) {
        dfsFind(root.right, expectNumber - root.val, path, res);
    }
    path.pop();
}

var root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);

console.log(FindPath(root, 22));

module.exports = {
    FindPath: FindPath
};
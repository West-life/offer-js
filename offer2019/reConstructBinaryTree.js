function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin) {
    if (pre.length !== vin.length || pre.length === 0) {
        return null;
    }
    let root = new TreeNode(pre[0]);
    if (pre.length !== 1) {
        let rootIndex = vin.indexOf(pre[0]);
        root.left = reConstructBinaryTree(pre.slice(1, rootIndex + 1), vin.slice(0, rootIndex));
        root.right = reConstructBinaryTree(pre.slice(rootIndex + 1, pre.length), vin.slice(rootIndex + 1, vin.length));
    }
    return root;
}

var pre = [1,2,4,7,3,5,6,8];
var vin = [4,7,2,1,5,3,8,6];

console.log(reConstructBinaryTree(pre,vin));

module.exports = {
    reConstructBinaryTree: reConstructBinaryTree
};
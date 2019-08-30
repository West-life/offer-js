function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Convert(pRootOfTree) {
    if (pRootOfTree == null || (pRootOfTree.left == null && pRootOfTree.right == null)) {
        return pRootOfTree;
    }
    let left = null, right = null;
    if (pRootOfTree.right != null){
        right = Convert(pRootOfTree.right);
        pRootOfTree.right = right;
        right.left = pRootOfTree;
    }
    if (pRootOfTree.left != null){
        left = Convert(pRootOfTree.left);
        let tmp = left;
        while (tmp.right != null){
            tmp = tmp.right;
        }
        pRootOfTree.left = tmp;
        tmp.right = pRootOfTree;
    }
    return left == null ? pRootOfTree : left;
}

module.exports = {
    Convert: Convert
};
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2) {
    if (pRoot1 == null || pRoot2 == null) {
        return false;
    }
    let res = false;
    if (pRoot1.val === pRoot2.val) {
        res = doesTree1haveTree2(pRoot1, pRoot2);
    }
    if (res) {
        return true;
    } else {
        return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
    }
}

function doesTree1haveTree2(pRoot1, pRoot2) {
    if (pRoot1 == null && pRoot2 == null) {
        return true;
    }
    if (pRoot1 == null) {
        return false;
    }
    if (pRoot2 == null) {
        return true
    }
    return pRoot1.val === pRoot2.val && doesTree1haveTree2(pRoot1.left, pRoot2.left) && doesTree1haveTree2(pRoot1.right, pRoot2.right);
}

module.exports = {
    HasSubtree: HasSubtree
};
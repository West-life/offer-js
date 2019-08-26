function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root)
{
    let res = [], queue = [];
    let pos = root;
    while (pos != null){
        res.push(pos.val);
        if (pos.left !== null){
            queue.push(pos.left)
        }
        if (pos.right !== null){
            queue.push(pos.right);
        }
        pos = queue.shift();
    }
    return res;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
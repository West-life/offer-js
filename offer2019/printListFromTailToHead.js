function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    let res = [];
    let tmp = head;
    while(tmp != null){
        res.unshift(tmp.val);
        tmp = tmp.next
    }
    return res
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};
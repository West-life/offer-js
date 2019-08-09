function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    let pos1 = null, pos2 = pHead, pos3 = pHead;
    while(pos3 != null){
        pos3 = pos2.next;
        pos2.next = pos1;
        pos1 = pos2;
        pos2 = pos3;
    }
    return pos1;
}
module.exports = {
    ReverseList : ReverseList
};
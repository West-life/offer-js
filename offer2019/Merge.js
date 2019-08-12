function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    if(pHead1 == null && pHead2 == null){
        return null;
    }
    if (pHead1 == null){
        return pHead2;
    }
    if (pHead2 == null){
        return pHead1;
    }
    let res = {}
    if(pHead1.val < pHead2.val){
        res = pHead1;
        res.next = Merge(pHead1.next, pHead2);
    }else {
        res = pHead2;
        res.next = Merge(pHead1, pHead2.next);
    }
    return res;
}
module.exports = {
    Merge : Merge
};
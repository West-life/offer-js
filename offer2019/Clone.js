function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    if(pHead  == null){
        return null;
    }
    //1, 复制链表
    let pos1 = pHead;
    while (pos1 != null){
        let node = new RandomListNode(pos1.label);
        node.next = pos1.next;
        pos1.next = node;
        pos1 = node.next;
    }
    //2, 设置rondom指针
    let pos2 = pHead;
    while (pos2 != null){
        if (pos2.random != null){
            pos2.next.random = pos2.random.next;
        }
        pos2 = pos2.next.next;
    }
    //3, 分离链表
    let pos3 = pHead;
    let pCloneHead = pHead.next;
    let pos4 = pCloneHead;
    while (pos3 != null){
        pos3.next = pos3.next.next;
        pos3 = pos3.next;
        if (pos4.next != null){
            pos4.next = pos4.next.next;
            pos4 = pos4.next;
        }
    }
    return pCloneHead;
}
module.exports = {
    Clone : Clone
};
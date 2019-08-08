function ListNode(x) {
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k) {
    if (head == null || k <= 0) {
        return null;
    }
    let pos1 = head, pos2 = head;
    for (let i = 0; i < k - 1; i++) {
        if(pos1.next == null){
            return null;
        }
        pos1 = pos1.next;
    }
    while (pos1.next != null){
        pos1 = pos1.next;
        pos2 = pos2.next;
    }
    return pos2;
}

module.exports = {
    FindKthToTail: FindKthToTail
};
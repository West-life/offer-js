function IsPopOrder(pushV, popV) {
    if (pushV.length !== popV.length) {
        return false;
    }
    let stack = [], j = 0;
    for (let i = 0; i < pushV.length; i++) {
        stack.push(pushV[i]);
        while (stack.length !== 0 && stack[stack.length - 1] === popV[j]){
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
}

console.log(IsPopOrder([1,2,3,4,5],[4,5,3,2,1]))

module.exports = {
    IsPopOrder: IsPopOrder
};
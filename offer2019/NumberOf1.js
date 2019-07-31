function NumberOf1(n)
{
    let count = 0 , flag = 1;
    while (flag){
        if (n & flag){
            count++
        }
        flag = flag << 1;
    }
    return count;
}

console.log(NumberOf1(-1));
module.exports = {
    NumberOf1 : NumberOf1
};
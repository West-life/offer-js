function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length === 0){
        return 0;
    }
    let index1 = 0;
    let index2 = rotateArray.length;
    let indexMid = Math.floor((index1 + index2)/2);
    while (index2 - index1 > 1){
        if (rotateArray[index1] === rotateArray[indexMid] && rotateArray[index2] === rotateArray[indexMid]){
            return minInOrder(rotateArray);
        } else if(rotateArray[index1] > rotateArray[indexMid]){
            index2 = indexMid;
            indexMid = Math.floor((index1 + index2)/2);
        }else if (rotateArray[index1] <= rotateArray[indexMid]) {
            index1 = indexMid;
            indexMid = Math.floor((index1 + index2)/2);
        }
    }
    return rotateArray[index2];
}
function minInOrder(array){
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log((1+2)/2)
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};
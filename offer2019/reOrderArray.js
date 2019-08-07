function reOrderArray(array)
{
    let tmp=[],pos=0;
    if (array.length === 0){
        return tmp;
    }
    for (let i = 0; i < array.length; i++) {
        if(!isEven(array[i])){
            tmp[pos++] = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if(isEven(array[i])){
            tmp[pos++] = array[i];
        }
    }
    array = tmp;
    return array;
}

function isEven(target){
    return (target & 1) === 0;
}
module.exports = {
    reOrderArray : reOrderArray
};
var INVALID_INPUT = false; //判断输入是否合法
function Power(base, exponent) {
    let res = 0;
    if (base === 0 && exponent < 0) {
        INVALID_INPUT = true;
        return res;
    }
    if (exponent < 0) {
        return 1 / powerWithUnsignedExponent(base, -exponent);
    } else {
        return powerWithUnsignedExponent(base, exponent);
    }

}

function powerWithUnsignedExponent(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if ((exponent & 1) === 1) {
        res = Power(base, (exponent - 1) >> 1);
        return res * res * base;
    } else {
        res = Power(base, exponent >> 1);
        return res * res;
    }
}

module.exports = {
    Power: Power
};
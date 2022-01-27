var str = '大家好  asdasd去问他\n发生的\f\v发生';
function fn(str) {
    var res = str.replace(/[\t\n\v\r\f]+/g,'');
    return res;
}
console.log(fn(str))
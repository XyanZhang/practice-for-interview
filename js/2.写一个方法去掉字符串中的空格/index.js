// 正则
var str = '  abc d e f  g ';
function trim(str) {
    var reg = /\s+/g;
    if (typeof str === 'string') {
        var trimStr = str.replace(reg,'');
    }
    console.log(trimStr)
}
trim(str)  

var trim = function(str){
    return str.replace(/\s*/g,"");
}
str.replace(/\s*/g,""); //去除字符串内所有的空格
str.replace(/^\s*|\s*$/g,""); //去除字符串内两头的空格
str.replace(/^\s*/,""); //去除字符串内左侧的空格
str.replace(/(\s*$)/g,""); //去除字符串内右侧的空格
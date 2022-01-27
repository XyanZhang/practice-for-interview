/* 
new 关键字会进行如下操作

1. 创建一个空的简单JavaScript对象，即（{}）
2. 为步骤1新创建的对象添加属性—__proto__, 将该属性链接至构造函数的原型对象；
3. 将步骤1新创建的对象作为this的上下文
4. 如果该函数没有返回对象，则返回this
*/

function _new(Fn, ...arg) {
    const obj = Object.create(Fn.prototype);
    const obj1 = Fn.apply(obj, arg);
    return obj1 instanceof Object ? obj1 : obj;
}

// 
function _new(Fn,...args){
    // 创建对象
    let obj = {};
    // 对象的原型指向其构造函数对应的原型
    obj.proto = Fn.prototype;
    // 运行函数，且修改this指向实例
    obj1= Fn.apply(obj,args)
    // 返回对象
    return obj1 instanceof Object ? obj1:obj
}
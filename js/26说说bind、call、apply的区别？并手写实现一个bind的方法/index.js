/*
    call和apply都是为了解决改变this的指向。作用都是相同的，只是传参的方式不同。
    除了第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。 bind绑定完之后返回一个新的函数，不执行。
*/


Function.prototype.myCall = function (context = window) {
    context.fn = this;
  
    var args = [...arguments].slice(1);
  
    var result = context.fn(...args);
    // 执行完后干掉
    delete context.fn;
    return result;
}

Function.prototype.myApply = function (context = window) {
    context.fn = this;
  
    var result
    // 判断 arguments[1] 是不是 undefined
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
  
    delete context.fn
    return result;
}

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
  }
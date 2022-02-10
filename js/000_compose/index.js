
// 计算一个数加 10 在乘以 10
let caculate = x => (x+10) * 10;
console.log(caculate(10))


// 用compose函数实现
let add = x => x+10;
let multiply = y => y*10;
console.log(multiply(add(10)))

let compose = function() {
    let args = [].slice().call(arguments);

    return function(x) {
        return args.reduceRight(function(total, current) {
            // 从右往左执行args里的函数
            console.log(total, current)
            return current(total)
        }, x)
    }
}

let calculate = compose(multiply, add);
console.log(calculate, calculate(10));
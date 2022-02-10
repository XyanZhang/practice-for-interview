/*
可以借助requestAnimationFrame API，requestAnimationFrame 使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用。
    requestAnimationFrame的回调函数执行次数通常与浏览器屏幕刷新次数相匹配，
    而利用这个API实现动画的原理就是回调函数内再次调用requestAnimationFrame，
    所以页面不断重绘时，然后检测1秒内requestAnimationFrame调用的次数，就是当前的FPS
 */

let tick = null, fps = 0, raf = null, flag = true
function FPS() {
    clearInterval(tick);
    tick = setInterval(() => {
        console.log('fps: ', fps)
        window.cancelAnimationFrame(raf)
        fps = 0
        flag = true

        const callback = (timeStamp) => {
            ++fps
            if (flag) {
            raf = window.requestAnimationFrame(callback)
            }
        }
        raf = window.requestAnimationFrame(callback)
    }, 1000);
}

FPS()
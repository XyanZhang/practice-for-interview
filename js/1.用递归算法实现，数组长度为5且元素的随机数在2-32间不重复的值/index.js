var arr = new Array(5);
var num = randomNumber()
var i = 0; // count

randomArray(arr, num);
console.log(arr);

function randomArray(arr, num) {
    if(arr.indexOf(num) < 0) { // 未重复
        arr[i] = num;
        i++;
    }else {
        num = randomNumber()
    }

    if(i >= arr.length) {
        return ;
    }else {
        randomArray(arr, num)
    }
}

function randomNumber() {
    return Math.floor(Math.random()*31 + 2)
}
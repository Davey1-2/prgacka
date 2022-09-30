function minsToSec(min) {

    let a = min * 60;
    return a;
}
console.log(minsToSec(2))

function aZaroven(a, b){
    if (!!a && !!b){
        return true;
    }
    else return false;
}
console.log(aZaroven(true,"text"))

function params(x, y){
    if (x > 0 && y > 0){
        return x * y;
    }
    else return -1
}
console.log(params(2,3))
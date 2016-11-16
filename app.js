'use strict'
function sleep(duration){
    console.time('sleep');
    console.log('sleep start');
    let nowTime = new Date().getTime();
    while (new Date().getTime() <= duration + nowTime){
    }
    console.log('sleep end')
    console.timeEnd('sleep')
}

function syncFunc(content,duration){
    setTimeout(function() {
        console.log(content);
    }, duration);
}

console.log(1);
console.log(2);
syncFunc('1 sync content',1000);
console.log(3);
console.log(4);
syncFunc('2 sync content',2);
sleep(2000);
console.log(5);
sleep(2000);
console.log(6);
syncFunc('3 sync content',3);
syncFunc('4 sync content',4);
console.log(7)

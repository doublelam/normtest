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

console.log('start');
console.log('step 1');
let worker = new Worker('./workers.js');
// for(let i = 0;i < 3; i++){
//     var tt = new Worker('./workers.js');
// }
console.time('time');
setInterval(function(){
    let dom = document.getElementById('test');
    dom.style.backgroundColor = '#' + Math.round(Math.random() * 999999);
    dom.style.width = (Math.random() * 2) * 40 + 'px';
    dom.style.height = (Math.random() * 2) * 40 + 'px';
    dom.style.top = (Math.random() * 2) * 40 + 'px';
    dom.style.left = (Math.random() * 2) * 40 + 'px'; 
},12);
// setInterval(function(){
//     sleep(50);
// },20);
worker.onmessage = function(data){
    console.log('get worker\'s data',data.data);
}
// tt.onmessage = function(data){
//     console.log('tt',data.data);
// }
console.log('step 2')

console.log('step 3')
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
setInterval(function(){
    sleep(100);
    postMessage({data: 'workers sleeping end'});
},10);

postMessage({data: 'workers sleeping end'});
'use strict'
function* gen(){
    var meta = yield function(cb){
        setTimeout(function(){
            cb(100);
        },3000);
    };
    var a = yield 9 * meta;
    console.log('a',a);
    var b = yield 4 * a;
    console.log('b',b);
    var c = yield a + b;
    console.log('c',c);
}
function sync(cb){
    setTimeout(cb,2000);
}
function co(fn){
    var genF = fn();
    let prevYield = null;
    let yieldOut = null;
    return function exeGen(){
        yieldOut = genF.next(prevYield);
        console.log(yieldOut);
        if (!yieldOut.done){
            if(typeof yieldOut.value === 'function'){
                yieldOut.value(function(data) {
                    prevYield = data;
                    exeGen();
                });
            }else{
                prevYield = yieldOut.value;
                exeGen();
            }
            
        }else{
            console.log('execute end');
            return prevYield;
        }
    }
}
co(gen)();

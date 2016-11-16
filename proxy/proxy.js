'use strict'
let numericDataStore = {  
    count: 0,
    amount: 1234,
    total: 14
};

numericDataStore = new Proxy(numericDataStore, {  
    set(target, key, value, proxy) {
        console.log(target, key, value, proxy);
        return Reflect.set(target, key, value, proxy);
    }
});
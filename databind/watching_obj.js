
function watchObj() {
    return (obj,keys,callback) => {
        let propVal = {}; 
        keys.forEach((item,index) => {
            this['fak' + item] = obj[item] || '';
            propVal['fak' + item] = {
                enumerable: false
            };
            propVal[item] = {
                enumerable: true,
                configurable: true,
                set: (val) => {
                    this['fak' + item] = val;
                    callback();
                    return this['fak' + item];
                },
                get: () => this['fak' + item]
            };
        });
        Object.defineProperties(obj,propVal);
    }
} 
let $watch = new watchObj();


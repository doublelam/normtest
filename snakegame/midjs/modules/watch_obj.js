"use strict";
var WatchObj = (function () {
    function WatchObj() {
    }
    WatchObj.prototype.watch = function (obj, keys, callback) {
        var propVal = {};
        keys.forEach(function (item, index) {
            obj['fak' + item] = obj[item] || '';
            propVal['fak' + item] = {
                enumerable: false
            };
            propVal[item] = {
                enumerable: true,
                configurable: true,
                set: function (val) {
                    this['fak' + item] = val;
                    callback.call(this, this['fak' + item]);
                    return this['fak' + item];
                },
                get: function () { return this['fak' + item]; }
            };
        });
        Object.defineProperties(obj, propVal);
    };
    return WatchObj;
}());
exports.$watch = new WatchObj().watch;

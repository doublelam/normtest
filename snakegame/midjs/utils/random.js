"use strict";
var Random = (function () {
    function Random() {
    }
    Random.getOne = function (items) {
        var _length = items.length;
        var _count = Math.random() * (_length);
        return items[Math.floor(_count)];
    };
    Random.randomColor = function (opacity) {
        if (opacity === void 0) { opacity = '1'; }
        return "rgba(" + Number(Math.floor(Math.random() * 255)) + "," + Number(Math.floor(Math.random() * 255)) + "," + Number(Math.floor(Math.random() * 255)) + ", " + opacity + ")";
    };
    return Random;
}());
exports.Random = Random;

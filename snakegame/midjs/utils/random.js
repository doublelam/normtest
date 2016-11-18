"use strict";
var Random = (function () {
    function Random() {
    }
    Random.prototype.getOne = function (items) {
        var _length = items.length;
        var _count = Math.random() * (_length);
        return items[Math.floor(_count)];
    };
    return Random;
}());
var random = new Random();
exports.random = random;

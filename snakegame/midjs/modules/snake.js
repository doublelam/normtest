"use strict";
var Snake = (function () {
    function Snake() {
        this.body = [
            { pos: [20, 20],
                width: 20,
                height: 20,
                rotate: 0 },
            { pos: [40, 20],
                width: 20,
                height: 20,
                rotate: 0 },
            { pos: [60, 20],
                width: 20,
                height: 20,
                rotate: 0 }
        ];
    }
    return Snake;
}());
var snakeObj = new Snake();
exports.snakeObj = snakeObj;

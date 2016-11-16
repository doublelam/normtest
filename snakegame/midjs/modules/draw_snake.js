"use strict";
/;
var DrawSnake = (function () {
    function DrawSnake() {
    }
    DrawSnake.prototype.draw = function (snake) {
        for (var _i = 0, _a = snake.body; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
        return this.draw;
    };
    return DrawSnake;
}());
var drawSnake = new DrawSnake();
exports.drawSnake = drawSnake;

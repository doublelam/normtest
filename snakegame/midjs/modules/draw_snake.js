"use strict";
var dom_obj_1 = require('./dom_obj');
var snake_option_1 = require('../options/snake_option');
var DrawSnake = (function () {
    function DrawSnake() {
    }
    DrawSnake.prototype.draw = function (snake) {
        dom_obj_1.canTxt.clearRect(0, 0, dom_obj_1.canObj.width, dom_obj_1.canObj.height);
        for (var _i = 0, _a = snake.body; _i < _a.length; _i++) {
            var item = _a[_i];
            dom_obj_1.canTxt.fillStyle = item.color || snake_option_1.snakeOpt.color;
            dom_obj_1.canTxt.lineWidth = item.lineWidth || snake_option_1.snakeOpt.lineWidth;
            var dLeft = item.pos[0] - (item.width / 2);
            var dTop = item.pos[1] - (item.height / 2);
            dom_obj_1.canTxt[item.drawStyle || snake_option_1.snakeOpt.lineType](dLeft, dTop, item.width, item.height);
        }
        return this.draw;
    };
    return DrawSnake;
}());
var drawSnake = new DrawSnake();
exports.drawSnake = drawSnake;

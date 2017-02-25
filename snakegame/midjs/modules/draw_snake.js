"use strict";
var dom_obj_1 = require("./dom_obj");
var snake_option_1 = require("../options/snake_option");
var feed_machine_1 = require("./feed_machine");
var DrawSnake = (function () {
    function DrawSnake() {
    }
    DrawSnake.prototype.draw = function (snake) {
        dom_obj_1.canTxt.clearRect(0, 0, dom_obj_1.canObj.width, dom_obj_1.canObj.height);
        dom_obj_1.canTxt.fillStyle = feed_machine_1.feedMachine.color;
        dom_obj_1.canTxt.fillRect(feed_machine_1.feedMachine.leftTop[0], feed_machine_1.feedMachine.leftTop[1], feed_machine_1.feedMachine.width, feed_machine_1.feedMachine.height);
        for (var _i = 0, _a = snake.body; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.drawStyle === 'fillRect') {
                dom_obj_1.canTxt.fillStyle = item.color || snake_option_1.snakeOpt.color;
            }
            if (item.drawStyle === 'strokeRect') {
                dom_obj_1.canTxt.strokeStyle = item.color || snake_option_1.snakeOpt.color;
            }
            dom_obj_1.canTxt.lineWidth = item.lineWidth || snake_option_1.snakeOpt.lineWidth;
            var dLeft = item.pos[0] - (item.width / 2);
            var dTop = item.pos[1] - (item.height / 2);
            dom_obj_1.canTxt[item.drawStyle || snake_option_1.snakeOpt.lineType](dLeft, dTop, item.width, item.height);
        }
        return;
    };
    return DrawSnake;
}());
exports.drawSnake = new DrawSnake();

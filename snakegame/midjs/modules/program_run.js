"use strict";
var timer_1 = require('./timer');
var watch_obj_1 = require('./watch_obj');
var draw_snake_1 = require('./draw_snake');
var snake_1 = require('./snake');
var ProgramRn = (function () {
    function ProgramRn() {
    }
    ProgramRn.prototype.main = function () {
        this.changeTime();
        watch_obj_1.$watch(timer_1.timerRn, ['runTime'], function () {
            draw_snake_1.drawSnake.draw(snake_1.snakeObj.newSnake());
        });
    };
    ProgramRn.prototype.changeTime = function () {
        setInterval(function () {
            timer_1.timerRn.forwardTime();
        }, 500);
    };
    return ProgramRn;
}());
var programRn = new ProgramRn();
exports.programRn = programRn;

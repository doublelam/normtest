"use strict";
var snake_1 = require('./modules/snake');
var draw_snake_1 = require('./modules/draw_snake');
var program_run_1 = require('./modules/program_run');
var AppLaunch = (function () {
    function AppLaunch() {
    }
    AppLaunch.prototype.main = function () {
        draw_snake_1.drawSnake.draw(snake_1.snakeObj);
    };
    return AppLaunch;
}());
var appLaunch = new AppLaunch();
appLaunch.main();
program_run_1.programRn.main();

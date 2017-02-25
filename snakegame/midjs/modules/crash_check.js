"use strict";
var extremum_1 = require("../utils/extremum");
var CrashCheck = (function () {
    function CrashCheck() {
    }
    CrashCheck.checkCrashWall = function (snake, canvas, callBack) {
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var lastNum = snake.body.length - 1;
        var snakeHeadLeft = snake.body[lastNum].pos[0] - snake.bodyStyleInfo.width / 2;
        var snakeHeadRight = snake.body[lastNum].pos[0] + snake.bodyStyleInfo.width / 2;
        var snakeHeadTop = snake.body[lastNum].pos[1] - snake.bodyStyleInfo.height / 2;
        var snakeHeadBottom = snake.body[lastNum].pos[1] + snake.bodyStyleInfo.height / 2;
        if (snakeHeadLeft < 0 ||
            snakeHeadRight > canvasWidth ||
            snakeHeadTop < 0 ||
            snakeHeadBottom > canvasHeight) {
            callBack.call(this);
        }
    };
    CrashCheck.chechCrashItSelf = function (snake, callBack) {
        var snakeLast = snake.body.length - 1;
        var headPos = [
            snake.body[snakeLast].pos[0],
            snake.body[snakeLast].pos[1]
        ];
        var minDistance = extremum_1.Extremum.min([
            snake.bodyStyleInfo.width,
            snake.bodyStyleInfo.height
        ]);
        for (var i = 0; i < snakeLast; i++) {
            var bodyGap = [
                Math.abs(snake.body[i].pos[0] - headPos[0]),
                Math.abs(snake.body[i].pos[1] - headPos[1])
            ];
            if (extremum_1.Extremum.max(bodyGap) < minDistance) {
                callBack.call(this);
            }
        }
    };
    CrashCheck.checkCrashFood = function (snake, food, callBack) {
        var snakeLast = snake.body.length - 1;
        var headPos = [
            snake.body[snakeLast].pos[0],
            snake.body[snakeLast].pos[1]
        ];
        var bodyGap = [
            Math.abs(food.leftTop[0] + (food.width / 2) - headPos[0]),
            Math.abs(food.leftTop[1] + (food.height / 2) - headPos[1])
        ];
        if (extremum_1.Extremum.max(bodyGap) < extremum_1.Extremum.max([food.width, food.height])) {
            callBack.call(this);
        }
    };
    return CrashCheck;
}());
exports.CrashCheck = CrashCheck;

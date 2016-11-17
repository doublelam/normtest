"use strict";
var direction_1 = require('./direction');
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
                width: 30,
                height: 30,
                rotate: 0 }
        ];
    }
    Snake.prototype.newSnake = function () {
        var bodyLength = this.body.length;
        for (var i = 0; i < bodyLength - 1; i++) {
            this.body[i].pos = this.body[i + 1].pos;
            this.body[i].rotate = this.body[i + 1].rotate;
        }
        this.body[bodyLength - 1].pos[0] += direction_1.directDifine[0] * this.body[bodyLength - 1].width;
        this.body[bodyLength - 1].pos[1] += direction_1.directDifine[1] * this.body[bodyLength - 1].height;
        return this;
    };
    return Snake;
}());
var snakeObj = new Snake();
exports.snakeObj = snakeObj;

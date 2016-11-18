"use strict";
var direction_1 = require('./direction');
var dom_obj_1 = require('./dom_obj');
var random_1 = require('../utils/random');
var Snake = (function () {
    function Snake() {
        this.body = [];
        for (var i = 0; i < 10000; i++) {
            this.body.push({
                pos: [10 + i * 10, 10],
                width: 10,
                height: 10,
                rotate: 0,
                color: "rgba(43,154,232,.1)",
                lineWidth: 1,
                drawStyle: 'strokeRect'
            });
        }
        this.body.push({
            pos: [10 + 100 * 10, 10],
            width: 10,
            height: 10,
            rotate: 0,
            color: "rgba(221,80,68,1)",
            lineWidth: 1,
            drawStyle: 'fillRect'
        });
    }
    Snake.prototype.newSnake = function () {
        var bodyLength = this.body.length;
        for (var i = 0; i < bodyLength - 1; i++) {
            this.body[i].pos[0] = Number(this.body[i + 1].pos[0]);
            this.body[i].pos[1] = Number(this.body[i + 1].pos[1]);
            this.body[i].rotate = this.body[i + 1].rotate;
        }
        var gap = { gapX: this.body[bodyLength - 1].width, gapY: this.body[bodyLength - 1].height };
        var snakeHead = [this.body[bodyLength - 1].pos[0], this.body[bodyLength - 1].pos[1]];
        var direcOperate = [
            function () { direction_1.directDifine.setDir(0, -1); },
            function () { direction_1.directDifine.setDir(0, 1); },
            function () { direction_1.directDifine.setDir(-1, 0); },
            function () { direction_1.directDifine.setDir(1, 0); }
        ];
        if (snakeHead[0] <= (0 + gap.gapX)) {
            console.log('left');
            console.log(random_1.random.getOne([0, 1, 3]));
            direcOperate[random_1.random.getOne([0, 1, 3])]();
        }
        if (snakeHead[0] >= (dom_obj_1.canObj.width - gap.gapX)) {
            console.log('right');
            console.log(random_1.random.getOne([0, 1, 2]));
            direcOperate[random_1.random.getOne([0, 1, 2])]();
        }
        if (snakeHead[1] <= (0 + gap.gapY)) {
            console.log('top');
            console.log(random_1.random.getOne([1, 2, 3]));
            direcOperate[random_1.random.getOne([1, 2, 3])]();
        }
        if (snakeHead[1] >= (dom_obj_1.canObj.height - gap.gapY)) {
            console.log('bottom');
            console.log(random_1.random.getOne([0, 2, 3]));
            direcOperate[random_1.random.getOne([0, 2, 3])]();
        }
        this.body[bodyLength - 1].pos[0] += direction_1.directDifine.getDir()[0] * gap.gapX;
        this.body[bodyLength - 1].pos[1] += direction_1.directDifine.getDir()[1] * gap.gapY;
        return this;
    };
    return Snake;
}());
var snakeObj = new Snake();
exports.snakeObj = snakeObj;

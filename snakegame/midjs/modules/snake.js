"use strict";
var direction_1 = require("./direction");
var dom_obj_1 = require("./dom_obj");
var random_1 = require("../utils/random");
var snake_option_1 = require("../options/snake_option");
var copy_obj_1 = require("../utils/copy_obj");
var Snake = (function () {
    function Snake() {
        this.bodyStyleInfo = {
            startPos: [5, 5],
            initLength: 10,
            width: 10,
            height: 10,
            isAutoRun: snake_option_1.snakeOpt.ifAutoRun
        };
        this.init();
    }
    Snake.prototype.init = function () {
        this.body = [];
        for (var i = 0; i < this.bodyStyleInfo.initLength; i++) {
            this.body.push({
                pos: [this.bodyStyleInfo.startPos[0] + i * this.bodyStyleInfo.width, this.bodyStyleInfo.startPos[1]],
                width: this.bodyStyleInfo.width,
                height: this.bodyStyleInfo.height,
                rotate: 0,
                color: '#aaa',
                lineWidth: 1,
                drawStyle: 'fillRect'
            });
        }
        this.body.push({
            pos: [this.bodyStyleInfo.startPos[0] + this.bodyStyleInfo.initLength * this.bodyStyleInfo.initLength, this.bodyStyleInfo.startPos[1]],
            width: this.bodyStyleInfo.width,
            height: this.bodyStyleInfo.height,
            rotate: 0,
            color: "rgba(221,80,68,1)",
            lineWidth: 1,
            drawStyle: 'fillRect'
        });
    };
    Snake.prototype.newSnake = function () {
        var bodyLength = this.body.length;
        for (var i = 0; i < bodyLength - 1; i++) {
            var tempPos = [];
            tempPos.push(this.body[i + 1].pos[0]);
            tempPos.push(this.body[i + 1].pos[1]);
            this.body[i].pos = tempPos;
            this.body[i].rotate = this.body[i + 1].rotate;
        }
        var gap = { gapX: this.body[bodyLength - 1].width, gapY: this.body[bodyLength - 1].height };
        var snakeHead = [this.body[bodyLength - 1].pos[0], this.body[bodyLength - 1].pos[1]];
        if (this.bodyStyleInfo.isAutoRun) {
            this.autoRun(snakeHead, gap);
        }
        this.body[bodyLength - 1].pos[0] += direction_1.directDifine.getDir()[0] * gap.gapX;
        this.body[bodyLength - 1].pos[1] += direction_1.directDifine.getDir()[1] * gap.gapY;
        return this;
    };
    Snake.prototype.autoRun = function (snakeHead, gap) {
        var direcOperate = [
            function () { direction_1.directDifine.setDir(0, -1); },
            function () { direction_1.directDifine.setDir(0, 1); },
            function () { direction_1.directDifine.setDir(-1, 0); },
            function () { direction_1.directDifine.setDir(1, 0); }
        ];
        if (snakeHead[0] <= (0 + gap.gapX)) {
            console.log('left');
            console.log(random_1.Random.getOne([0, 1, 3]));
            direcOperate[random_1.Random.getOne([0, 1, 3])]();
        }
        if (snakeHead[0] >= (dom_obj_1.canObj.width - gap.gapX)) {
            console.log('right');
            console.log(random_1.Random.getOne([0, 1, 2]));
            direcOperate[random_1.Random.getOne([0, 1, 2])]();
        }
        if (snakeHead[1] <= (0 + gap.gapY)) {
            console.log('top');
            console.log(random_1.Random.getOne([1, 2, 3]));
            direcOperate[random_1.Random.getOne([1, 2, 3])]();
        }
        if (snakeHead[1] >= (dom_obj_1.canObj.height - gap.gapY)) {
            console.log('bottom');
            console.log(random_1.Random.getOne([0, 2, 3]));
            direcOperate[random_1.Random.getOne([0, 2, 3])]();
        }
    };
    Snake.prototype.resetFactory = function () {
        this.init();
        direction_1.directDifine.resetDir();
    };
    Snake.prototype.growUp = function () {
        this.body.unshift(copy_obj_1.CopyObj.copyObj(this.body[0]));
    };
    return Snake;
}());
exports.Snake = Snake;
exports.snakeObj = new Snake();

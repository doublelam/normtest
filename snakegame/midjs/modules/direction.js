"use strict";
var random_1 = require("../utils/random");
var Direction = (function () {
    function Direction() {
        this.direction = [1, 0];
        this.getMouseEv();
    }
    Direction.prototype.getDir = function () {
        return this.direction;
    };
    Direction.prototype.setDir = function (dx, dy) {
        if ((dx + this.direction[0] === 0) ||
            (dy + this.direction[1] === 0)) {
            console.log('reverse!');
            dx = this.direction[0], dy = this.direction[1];
        }
        this.direction[0] = dx;
        this.direction[1] = dy;
        return this.direction;
    };
    Direction.prototype.randomDirecChange = function () {
        var _this = this;
        setInterval(function () {
            _this.setDir(random_1.Random.getOne([0, 1, -1]), random_1.Random.getOne([0, 1, -1]));
        }, 20);
    };
    Direction.prototype.getMouseEv = function () {
        var _this = this;
        window.onkeydown = function (e) {
            var keyCode = e.keyCode || e.which;
            console.log(keyCode);
            var _self = _this;
            function direcClear() {
                _self.direction = [0, 0];
            }
            switch (keyCode) {
                case 38:
                    _this.setDir(0, -1);
                    break;
                case 37:
                    _this.setDir(-1, 0);
                    break;
                case 39:
                    _this.setDir(1, 0);
                    break;
                case 40:
                    _this.setDir(0, 1);
                    break;
                default: break;
            }
        };
    };
    Direction.prototype.resetDir = function () {
        this.direction = [1, 0];
    };
    return Direction;
}());
var directDifine = new Direction();
exports.directDifine = directDifine;

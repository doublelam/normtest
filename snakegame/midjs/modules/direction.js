"use strict";
var random_1 = require('../utils/random');
var Direction = (function () {
    function Direction() {
        this.direction = [1, 0];
        this.getMouseEv();
        this.randomDirecChange();
    }
    Direction.prototype.getDir = function () {
        return this.direction;
    };
    Direction.prototype.setDir = function (dx, dy) {
        if (dx === void 0) { dx = this.direction[0]; }
        if (dy === void 0) { dy = this.direction[1]; }
        this.direction[0] = dx;
        this.direction[1] = dy;
        return this.direction;
    };
    Direction.prototype.randomDirecChange = function () {
        var _this = this;
        setInterval(function () {
            _this.setDir(random_1.random.getOne([0, 1, -1]), random_1.random.getOne([0, 1, -1]));
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
                    direcClear();
                    _this.direction[1] = -1;
                    break;
                case 37:
                    direcClear();
                    _this.direction[0] = -1;
                    break;
                case 39:
                    direcClear();
                    _this.direction[0] = 1;
                    break;
                case 40:
                    direcClear();
                    _this.direction[1] = 1;
                    break;
                default: break;
            }
        };
    };
    return Direction;
}());
var directDifine = new Direction();
exports.directDifine = directDifine;

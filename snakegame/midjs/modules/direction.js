"use strict";
var Direction = (function () {
    function Direction() {
        this.direction = [1, 0];
        this.getMouseEv();
    }
    Direction.prototype.getDir = function () {
        return this.direction;
    };
    Direction.prototype.setDir = function (dx, dy) {
        if (dx, dy === 1 || 0) {
            this.direction[0] = dx;
            this.direction[1] = dy;
        }
        return this.direction;
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
                default:
                    ;
                    break;
            }
        };
    };
    return Direction;
}());
var directDifine = new Direction();
exports.directDifine = directDifine;

"use strict";
var Direction = (function () {
    function Direction() {
        this.direction = {
            dX: 1,
            dY: 0
        };
    }
    Direction.prototype.getMouseEv = function () {
        var _this = this;
        window.onkeydown = function (e) {
            var keyCode = e.keyCode || e.which;
            switch (keyCode) {
                case 38:
                    _this.direction.dY - 1;
                    break;
                case :
            }
        };
    };
    Direction.prototype.test = function () {
        this.getMouseEv();
    };
    return Direction;
}());
var directDifine = new Direction();
exports.directDifine = directDifine;

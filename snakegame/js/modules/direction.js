(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
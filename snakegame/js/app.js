(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var snake_1 = require('./modules/snake');
var draw_snake_1 = require('./modules/draw_snake');
var direction_1 = require('./modules/direction');
var AppLaunch = (function () {
    function AppLaunch() {
    }
    AppLaunch.prototype.main = function () {
        draw_snake_1.drawSnake.draw(snake_1.snakeObj);
        direction_1.directDifine.test();
    };
    return AppLaunch;
}());
var appLaunch = new AppLaunch();
appLaunch.main();

},{"./modules/direction":2,"./modules/draw_snake":4,"./modules/snake":5}],2:[function(require,module,exports){
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
                case 38: _this.direc;
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

},{}],3:[function(require,module,exports){
"use strict";
var canObj = document.getElementById('canvas-ground');
var canTxt = canObj.getContext('2d');
exports.canTxt = canTxt;

},{}],4:[function(require,module,exports){
"use strict";
var dom_obj_1 = require('./dom_obj');
var snake_option_1 = require('../options/snake_option');
var DrawSnake = (function () {
    function DrawSnake() {
    }
    DrawSnake.prototype.draw = function (snake) {
        for (var _i = 0, _a = snake.body; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
            dom_obj_1.canTxt.fillStyle = snake_option_1.snakeOpt.color;
            dom_obj_1.canTxt.lineWidth = snake_option_1.snakeOpt.lineWidth;
            var dLeft = item.pos[0] - (item.width / 2);
            var dTop = item.pos[1] - (item.height / 2);
            dom_obj_1.canTxt[snake_option_1.snakeOpt.lineType](dLeft, dTop, item.width, item.height);
        }
        return this.draw;
    };
    return DrawSnake;
}());
var drawSnake = new DrawSnake();
exports.drawSnake = drawSnake;

},{"../options/snake_option":6,"./dom_obj":3}],5:[function(require,module,exports){
"use strict";
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
                width: 20,
                height: 20,
                rotate: 0 }
        ];
    }
    return Snake;
}());
var snakeObj = new Snake();
exports.snakeObj = snakeObj;

},{}],6:[function(require,module,exports){
"use strict";
var snakeOpt = {
    width: 20,
    height: 20,
    lineType: 'strokeRect',
    lineWidth: 1,
    color: '#aaa',
};
exports.snakeOpt = snakeOpt;

},{}]},{},[1])
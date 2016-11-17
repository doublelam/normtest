(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var snake_1 = require('./modules/snake');
var draw_snake_1 = require('./modules/draw_snake');
var program_run_1 = require('./modules/program_run');
var AppLaunch = (function () {
    function AppLaunch() {
    }
    AppLaunch.prototype.main = function () {
        draw_snake_1.drawSnake.draw(snake_1.snakeObj);
    };
    return AppLaunch;
}());
var appLaunch = new AppLaunch();
appLaunch.main();
program_run_1.programRn.main();

},{"./modules/draw_snake":4,"./modules/program_run":5,"./modules/snake":6}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
var canObj = document.getElementById('canvas-ground');
exports.canObj = canObj;
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
        dom_obj_1.canTxt.clearRect(0, 0, dom_obj_1.canObj.width, dom_obj_1.canObj.height);
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

},{"../options/snake_option":9,"./dom_obj":3}],5:[function(require,module,exports){
"use strict";
var timer_1 = require('./timer');
var watch_obj_1 = require('./watch_obj');
var draw_snake_1 = require('./draw_snake');
var snake_1 = require('./snake');
var ProgramRn = (function () {
    function ProgramRn() {
    }
    ProgramRn.prototype.main = function () {
        this.changeTime();
        watch_obj_1.$watch(timer_1.timerRn, ['runTime'], function () {
            console.log(this.runTime);
            draw_snake_1.drawSnake.draw(snake_1.snakeObj.newSnake());
        });
    };
    ProgramRn.prototype.changeTime = function () {
        setInterval(function () {
            timer_1.timerRn.forwardTime();
        }, 3000);
    };
    return ProgramRn;
}());
var programRn = new ProgramRn();
exports.programRn = programRn;

},{"./draw_snake":4,"./snake":6,"./timer":7,"./watch_obj":8}],6:[function(require,module,exports){
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

},{"./direction":2}],7:[function(require,module,exports){
"use strict";
var Timer = (function () {
    function Timer(initTime) {
        this.runTime = initTime;
    }
    Timer.prototype.getTime = function () {
        return this.runTime;
    };
    Timer.prototype.setTime = function (time) {
        var nTime = Math.floor(Number(time));
        if (nTime) {
            this.runTime = nTime;
        }
        else {
            throw 'err: not integer number';
        }
        return this.runTime;
    };
    Timer.prototype.forwardTime = function () {
        this.runTime++;
        return this.runTime;
    };
    Timer.prototype.backwardTime = function () {
        if (this.runTime > 0) {
            this.runTime--;
        }
        return this.runTime;
    };
    return Timer;
}());
var timerRn = new Timer(0);
exports.timerRn = timerRn;

},{}],8:[function(require,module,exports){
"use strict";
var WatchObj = (function () {
    function WatchObj() {
    }
    WatchObj.prototype.watch = function (obj, keys, callback) {
        var propVal = {};
        keys.forEach(function (item, index) {
            obj['fak' + item] = obj[item] || '';
            propVal['fak' + item] = {
                enumerable: false
            };
            propVal[item] = {
                enumerable: true,
                configurable: true,
                set: function (val) {
                    this['fak' + item] = val;
                    callback.call(this, this['fak' + item]);
                    return this['fak' + item];
                },
                get: function () { return this['fak' + item]; }
            };
        });
        Object.defineProperties(obj, propVal);
    };
    return WatchObj;
}());
var $watch = new WatchObj().watch;
exports.$watch = $watch;

},{}],9:[function(require,module,exports){
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
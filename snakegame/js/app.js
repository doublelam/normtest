(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var snake_1 = require("./modules/snake");
var draw_snake_1 = require("./modules/draw_snake");
var program_run_1 = require("./modules/program_run");
var AppLaunch = (function () {
    function AppLaunch() {
    }
    AppLaunch.prototype.main = function () {
        draw_snake_1.drawSnake.draw(snake_1.snakeObj);
        program_run_1.programRn.main();
    };
    return AppLaunch;
}());
var appLaunch = new AppLaunch();
appLaunch.main();

},{"./modules/draw_snake":6,"./modules/program_run":8,"./modules/snake":9}],2:[function(require,module,exports){
"use strict";
var dom_obj_1 = require("./dom_obj");
var snake_1 = require("./snake");
var feed_machine_1 = require("./feed_machine");
var program_run_1 = require("./program_run");
var AlertMaskHandler = (function () {
    function AlertMaskHandler() {
    }
    AlertMaskHandler.prototype.playAgainHandle = function () {
        dom_obj_1.btnPlayAgain.onclick = function (e) {
            console.log('play again');
            console.log(dom_obj_1.alertMask);
            dom_obj_1.alertMask.className = dom_obj_1.alertMask.className + ' hidden';
            snake_1.snakeObj.resetFactory();
            feed_machine_1.feedMachine.feeding();
            program_run_1.programRn.changeTime(program_run_1.programRn.initSpeed);
        };
    };
    AlertMaskHandler.prototype.setAlert = function (opt) {
        var _this = this;
        opt && opt.title && (dom_obj_1.alertTitle.innerText = opt.title);
        opt && opt.btnTex && (dom_obj_1.btnPlayAgain.innerText = opt.btnTex);
        if (opt && opt.ifScore) {
            dom_obj_1.scoreTxt.style.display = 'block';
            var score_1 = (snake_1.snakeObj.body.length - snake_1.snakeObj.bodyStyleInfo.initLength - 1) * 100;
            this.intervalNum && clearInterval(this.intervalNum);
            this.intervalNum = setInterval(function () {
                var temScore = Number(dom_obj_1.scoreTxt.innerText) + 5;
                dom_obj_1.scoreTxt.innerText = "" + temScore;
                if (temScore >= score_1) {
                    dom_obj_1.scoreTxt.innerText = "" + score_1;
                    clearInterval(_this.intervalNum);
                }
            }, 10);
        }
        else {
            dom_obj_1.scoreTxt.style.display = 'none';
        }
        dom_obj_1.scoreTxt.innerText = '0';
        dom_obj_1.alertMask.className = dom_obj_1.alertMask.className.replace(' hidden', '');
    };
    return AlertMaskHandler;
}());
exports.AlertMaskHandler = AlertMaskHandler;
exports.alertHandle = new AlertMaskHandler();

},{"./dom_obj":5,"./feed_machine":7,"./program_run":8,"./snake":9}],3:[function(require,module,exports){
"use strict";
var extremum_1 = require("../utils/extremum");
var CrashCheck = (function () {
    function CrashCheck() {
    }
    CrashCheck.checkCrashWall = function (snake, canvas, callBack) {
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var lastNum = snake.body.length - 1;
        var snakeHeadLeft = snake.body[lastNum].pos[0] - snake.bodyStyleInfo.width / 2;
        var snakeHeadRight = snake.body[lastNum].pos[0] + snake.bodyStyleInfo.width / 2;
        var snakeHeadTop = snake.body[lastNum].pos[1] - snake.bodyStyleInfo.height / 2;
        var snakeHeadBottom = snake.body[lastNum].pos[1] + snake.bodyStyleInfo.height / 2;
        if (snakeHeadLeft < 0 ||
            snakeHeadRight > canvasWidth ||
            snakeHeadTop < 0 ||
            snakeHeadBottom > canvasHeight) {
            callBack.call(this);
        }
    };
    CrashCheck.chechCrashItSelf = function (snake, callBack) {
        var snakeLast = snake.body.length - 1;
        var headPos = [
            snake.body[snakeLast].pos[0],
            snake.body[snakeLast].pos[1]
        ];
        var minDistance = extremum_1.Extremum.min([
            snake.bodyStyleInfo.width,
            snake.bodyStyleInfo.height
        ]);
        for (var i = 0; i < snakeLast; i++) {
            var bodyGap = [
                Math.abs(snake.body[i].pos[0] - headPos[0]),
                Math.abs(snake.body[i].pos[1] - headPos[1])
            ];
            if (extremum_1.Extremum.max(bodyGap) < minDistance) {
                callBack.call(this);
            }
        }
    };
    CrashCheck.checkCrashFood = function (snake, food, callBack) {
        var snakeLast = snake.body.length - 1;
        var headPos = [
            snake.body[snakeLast].pos[0],
            snake.body[snakeLast].pos[1]
        ];
        var bodyGap = [
            Math.abs(food.leftTop[0] + (food.width / 2) - headPos[0]),
            Math.abs(food.leftTop[1] + (food.height / 2) - headPos[1])
        ];
        if (extremum_1.Extremum.max(bodyGap) < extremum_1.Extremum.max([food.width, food.height])) {
            callBack.call(this);
        }
    };
    return CrashCheck;
}());
exports.CrashCheck = CrashCheck;

},{"../utils/extremum":14}],4:[function(require,module,exports){
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

},{"../utils/random":15}],5:[function(require,module,exports){
"use strict";
exports.canObj = document.getElementById('canvas-ground');
exports.canTxt = exports.canObj.getContext('2d');
exports.alertMask = document.getElementById('game-alert');
exports.btnPlayAgain = document.getElementById('btn-play-again');
exports.scoreTxt = document.getElementById('score-show');
exports.alertTitle = document.getElementById('text-hint');

},{}],6:[function(require,module,exports){
"use strict";
var dom_obj_1 = require("./dom_obj");
var snake_option_1 = require("../options/snake_option");
var feed_machine_1 = require("./feed_machine");
var DrawSnake = (function () {
    function DrawSnake() {
    }
    DrawSnake.prototype.draw = function (snake) {
        dom_obj_1.canTxt.clearRect(0, 0, dom_obj_1.canObj.width, dom_obj_1.canObj.height);
        dom_obj_1.canTxt.fillStyle = feed_machine_1.feedMachine.color;
        dom_obj_1.canTxt.fillRect(feed_machine_1.feedMachine.leftTop[0], feed_machine_1.feedMachine.leftTop[1], feed_machine_1.feedMachine.width, feed_machine_1.feedMachine.height);
        for (var _i = 0, _a = snake.body; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.drawStyle === 'fillRect') {
                dom_obj_1.canTxt.fillStyle = item.color || snake_option_1.snakeOpt.color;
            }
            if (item.drawStyle === 'strokeRect') {
                dom_obj_1.canTxt.strokeStyle = item.color || snake_option_1.snakeOpt.color;
            }
            dom_obj_1.canTxt.lineWidth = item.lineWidth || snake_option_1.snakeOpt.lineWidth;
            var dLeft = item.pos[0] - (item.width / 2);
            var dTop = item.pos[1] - (item.height / 2);
            dom_obj_1.canTxt[item.drawStyle || snake_option_1.snakeOpt.lineType](dLeft, dTop, item.width, item.height);
        }
        return;
    };
    return DrawSnake;
}());
exports.drawSnake = new DrawSnake();

},{"../options/snake_option":12,"./dom_obj":5,"./feed_machine":7}],7:[function(require,module,exports){
"use strict";
var snake_1 = require("./snake");
var dom_obj_1 = require("./dom_obj");
var random_1 = require("../utils/random");
var FeedMachine = (function () {
    function FeedMachine() {
        this.feeding([0, 0], 'rgba(0,0,0,0)');
    }
    FeedMachine.prototype.feeding = function (pos, color, width, height) {
        var snakeWidth = snake_1.snakeObj.bodyStyleInfo.width;
        var snakeHeight = snake_1.snakeObj.bodyStyleInfo.height;
        var canWidth = dom_obj_1.canObj.width;
        var canHeight = dom_obj_1.canObj.height;
        var randomHorizon = Math.floor(Math.random() * (canWidth / snakeWidth));
        var randomVerticle = Math.floor(Math.random() * (canHeight / snakeHeight));
        this.width = width || snakeWidth;
        this.height = height || snakeHeight;
        this.leftTop = [randomHorizon * this.width, randomVerticle * this.height];
        this.color = color || random_1.Random.randomColor();
        return this;
    };
    return FeedMachine;
}());
exports.FeedMachine = FeedMachine;
exports.feedMachine = new FeedMachine();

},{"../utils/random":15,"./dom_obj":5,"./snake":9}],8:[function(require,module,exports){
"use strict";
var timer_1 = require("./timer");
var watch_obj_1 = require("./watch_obj");
var draw_snake_1 = require("./draw_snake");
var snake_1 = require("./snake");
var crash_check_1 = require("./crash_check");
var dom_obj_1 = require("./dom_obj");
var feed_machine_1 = require("./feed_machine");
var alert_mask_handler_1 = require("./alert_mask_handler");
var ProgramRn = (function () {
    function ProgramRn() {
        this.initSpeed = 500;
        this.currentSpeed = this.initSpeed;
    }
    ProgramRn.prototype.main = function () {
        var _this = this;
        alert_mask_handler_1.alertHandle.setAlert({
            title: 'CLICK TO START',
            ifScore: false,
            btnTex: 'START GAME'
        });
        watch_obj_1.$watch(timer_1.timerRn, ['runTime'], function () {
            draw_snake_1.drawSnake.draw(snake_1.snakeObj.newSnake());
            crash_check_1.CrashCheck.checkCrashWall(snake_1.snakeObj, dom_obj_1.canObj, function () {
                _this.stop();
                alert_mask_handler_1.alertHandle.setAlert({
                    title: 'YOUR SCORE',
                    ifScore: true,
                    btnTex: 'PLAY AGAIN'
                });
            });
            crash_check_1.CrashCheck.chechCrashItSelf(snake_1.snakeObj, function () {
                _this.stop();
                alert_mask_handler_1.alertHandle.setAlert({
                    title: 'YOUR SCORE',
                    ifScore: true,
                    btnTex: 'PLAY AGAIN'
                });
            });
            crash_check_1.CrashCheck.checkCrashFood(snake_1.snakeObj, feed_machine_1.feedMachine, function () {
                feed_machine_1.feedMachine.feeding();
                snake_1.snakeObj.growUp();
                _this.currentSpeed > 50 ? _this.currentSpeed = _this.currentSpeed - 50 : _this.currentSpeed = 50;
                console.log('current speed', _this.currentSpeed);
                _this.changeTime(_this.currentSpeed);
            });
        });
        alert_mask_handler_1.alertHandle.playAgainHandle();
    };
    ProgramRn.prototype.changeTime = function (delay) {
        this.intervalNum && clearInterval(this.intervalNum);
        this.intervalNum = setInterval(function () {
            timer_1.timerRn.forwardTime();
        }, delay);
    };
    ProgramRn.prototype.pause = function () {
        clearInterval(this.intervalNum);
    };
    ProgramRn.prototype.stop = function () {
        clearInterval(this.intervalNum);
        this.currentSpeed = this.initSpeed;
    };
    return ProgramRn;
}());
exports.programRn = new ProgramRn();

},{"./alert_mask_handler":2,"./crash_check":3,"./dom_obj":5,"./draw_snake":6,"./feed_machine":7,"./snake":9,"./timer":10,"./watch_obj":11}],9:[function(require,module,exports){
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

},{"../options/snake_option":12,"../utils/copy_obj":13,"../utils/random":15,"./direction":4,"./dom_obj":5}],10:[function(require,module,exports){
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
exports.timerRn = new Timer(0);

},{}],11:[function(require,module,exports){
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
exports.$watch = new WatchObj().watch;

},{}],12:[function(require,module,exports){
"use strict";
exports.snakeOpt = {
    width: 2,
    height: 2,
    lineType: 'strokeRect',
    lineWidth: 1,
    color: '#aaa',
    ifAutoRun: false
};

},{}],13:[function(require,module,exports){
"use strict";
var CopyObj = (function () {
    function CopyObj() {
    }
    CopyObj.copyObj = function (obj) {
        var imageObject = {};
        for (var key in obj) {
            if (typeof obj[key] === 'object') {
                if (obj[key] instanceof Array) {
                    imageObject[key] = CopyObj.copyArr(obj[key]);
                }
                else if (obj[key] instanceof Object) {
                    imageObject[key] = CopyObj.copyObj(obj[key]);
                }
            }
            else {
                imageObject[key] = obj[key];
            }
        }
        return imageObject;
    };
    CopyObj.copyArr = function (arr) {
        var imageArray = [];
        for (var index in arr) {
            if (typeof arr[index] === 'object') {
                if (arr[index] instanceof Array) {
                    imageArray[index] = CopyObj.copyArr(arr[index]);
                }
                else if (arr[index] instanceof Object) {
                    imageArray[index] = CopyObj.copyObj(arr[index]);
                }
            }
            else {
                imageArray[index] = arr[index];
            }
        }
        return imageArray;
    };
    return CopyObj;
}());
exports.CopyObj = CopyObj;

},{}],14:[function(require,module,exports){
"use strict";
var Extremum = (function () {
    function Extremum() {
    }
    Extremum.min = function (numbers) {
        var tempNum = numbers[0];
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var val = numbers_1[_i];
            if (tempNum > val) {
                tempNum = val;
            }
        }
        return tempNum;
    };
    Extremum.max = function (numbers) {
        var tempNum = numbers[0];
        for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
            var val = numbers_2[_i];
            if (tempNum < val) {
                tempNum = val;
            }
        }
        return tempNum;
    };
    return Extremum;
}());
exports.Extremum = Extremum;

},{}],15:[function(require,module,exports){
"use strict";
var Random = (function () {
    function Random() {
    }
    Random.getOne = function (items) {
        var _length = items.length;
        var _count = Math.random() * (_length);
        return items[Math.floor(_count)];
    };
    Random.randomColor = function (opacity) {
        if (opacity === void 0) { opacity = '1'; }
        return "rgba(" + Number(Math.floor(Math.random() * 255)) + "," + Number(Math.floor(Math.random() * 255)) + "," + Number(Math.floor(Math.random() * 255)) + ", " + opacity + ")";
    };
    return Random;
}());
exports.Random = Random;

},{}]},{},[1])
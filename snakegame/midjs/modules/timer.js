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

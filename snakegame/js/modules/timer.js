(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
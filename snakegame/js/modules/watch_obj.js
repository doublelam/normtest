(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
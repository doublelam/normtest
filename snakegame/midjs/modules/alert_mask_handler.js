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
            program_run_1.programRn.changeTime(500);
        };
    };
    AlertMaskHandler.prototype.setAlert = function () {
        var _this = this;
        var score = (snake_1.snakeObj.body.length - snake_1.snakeObj.bodyStyleInfo.initLength - 1) * 100;
        dom_obj_1.scoreTxt.innerText = '0';
        dom_obj_1.alertMask.className = dom_obj_1.alertMask.className.replace(' hidden', '');
        this.intervalNum && clearInterval(this.intervalNum);
        this.intervalNum = setInterval(function () {
            var temScore = Number(dom_obj_1.scoreTxt.innerText) + 5;
            dom_obj_1.scoreTxt.innerText = "" + temScore;
            if (temScore >= score) {
                dom_obj_1.scoreTxt.innerText = "" + score;
                clearInterval(_this.intervalNum);
            }
        }, 10);
    };
    return AlertMaskHandler;
}());
exports.AlertMaskHandler = AlertMaskHandler;
exports.alertHandle = new AlertMaskHandler();

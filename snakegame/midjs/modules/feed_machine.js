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

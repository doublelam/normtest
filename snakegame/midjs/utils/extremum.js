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

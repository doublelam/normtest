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

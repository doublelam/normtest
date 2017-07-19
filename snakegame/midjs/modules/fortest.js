var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Test = (function () {
    function Test() {
    }
    Test.prototype.method = function () {
        console.log('method');
    };
    return Test;
}());
var ChiTest = (function (_super) {
    __extends(ChiTest, _super);
    function ChiTest() {
        return _super.apply(this, arguments) || this;
    }
    ChiTest.prototype.newM = function () {
        this.method();
    };
    return ChiTest;
}(Test));

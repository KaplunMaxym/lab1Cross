"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ColorPoint = void 0;
var sample_1 = require("./sample");
var ColorPoint = /** @class */ (function (_super) {
    __extends(ColorPoint, _super);
    function ColorPoint(x1, y1, z1, x2, y2, z2, color) {
        var _this = _super.call(this, x1, y1, z1, x2, y2, z2) || this;
        _this.color = color;
        return _this;
    }
    return ColorPoint;
}(sample_1.Point));
exports.ColorPoint = ColorPoint;

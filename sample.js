"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x1, y1, z1, x2, y2, z2) {
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
    }
    Point.prototype.Distanse1ToZero = function () {
        return Math.sqrt(Math.pow((this.x1 - 0), 2) + Math.pow((this.y1 - 0), 2) + Math.pow((this.z1 - 0), 2));
    };
    Point.prototype.Distanse1To2 = function () {
        return Math.sqrt(Math.pow((this.x1 - this.x2), 2) + Math.pow((this.y1 - this.y2), 2) + Math.pow((this.z1 - this.z2), 2));
    };
    return Point;
}());
exports.Point = Point;

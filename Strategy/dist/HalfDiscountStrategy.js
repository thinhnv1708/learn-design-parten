"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HalfDiscountStrategy = (function () {
    function HalfDiscountStrategy() {
    }
    HalfDiscountStrategy.prototype.DoDiscount = function (value) {
        return value * 0.5;
    };
    return HalfDiscountStrategy;
}());
exports.default = HalfDiscountStrategy;
//# sourceMappingURL=HalfDiscountStrategy.js.map
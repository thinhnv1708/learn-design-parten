"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MilkTeaDecorator_1 = require("./MilkTeaDecorator");
class WhiteBubble extends MilkTeaDecorator_1.default {
    constructor(inner) {
        super(inner);
    }
    Cost() {
        return 1.5 + this.milkTea.Cost();
    }
}
exports.default = WhiteBubble;
//# sourceMappingURL=WhiteBubble.js.map
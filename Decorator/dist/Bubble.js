"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MilkTeaDecorator_1 = require("./MilkTeaDecorator");
class Bubble extends MilkTeaDecorator_1.default {
    constructor(inner) {
        super(inner);
    }
    Cost() {
        return 1 + this.milkTea.Cost();
    }
}
exports.default = Bubble;
//# sourceMappingURL=Bubble.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MilkTeaDecorator_1 = require("./MilkTeaDecorator");
class EggPudding extends MilkTeaDecorator_1.default {
    constructor(inner) {
        super(inner);
    }
    Cost() {
        return 3 + this.milkTea.Cost();
    }
}
exports.default = EggPudding;
//# sourceMappingURL=EggPudding.js.map
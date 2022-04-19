"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MilkTeaDecorator_1 = require("./MilkTeaDecorator");
class BlackSugar extends MilkTeaDecorator_1.default {
    constructor(inner) {
        super(inner);
    }
    Cost() {
        return 2 + this.milkTea.Cost();
    }
}
exports.default = BlackSugar;
//# sourceMappingURL=BlackSugar.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MilkTeaDecorator {
    constructor(inner) {
        this.milkTea = inner;
    }
    Cost() {
        return this.milkTea.Cost();
    }
}
exports.default = MilkTeaDecorator;
//# sourceMappingURL=MilkTeaDecorator.js.map
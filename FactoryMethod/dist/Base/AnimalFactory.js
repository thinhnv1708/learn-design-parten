"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = require("./Bird");
const Dog_1 = require("./Dog");
class AnimalFactory {
    constructor(index) {
        this.index = index;
    }
    createAnimal() {
        switch (this.index) {
            case 1:
                return new Bird_1.default();
            case 2:
                return new Dog_1.default();
            case 3:
                return new Dog_1.default();
            default:
                return null;
        }
    }
}
exports.default = AnimalFactory;
//# sourceMappingURL=AnimalFactory.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = require("./Bird");
const Cat_1 = require("./Cat");
const Dog_1 = require("./Dog");
class BasicAnimalFactory {
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
                return new Cat_1.default();
            default:
                return null;
        }
    }
}
exports.default = BasicAnimalFactory;
//# sourceMappingURL=BasicAnimalFactory.js.map
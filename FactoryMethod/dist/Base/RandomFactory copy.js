"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = require("./Bird");
const Cat_1 = require("./Cat");
const Dog_1 = require("./Dog");
class RandomFactory {
    createAnimal() {
        const random = Math.floor(Math.random() * 3) + 1;
        switch (random) {
            case 1:
                return new Bird_1.default();
            case 2:
                return new Dog_1.default();
            default:
                return new Cat_1.default();
        }
    }
}
exports.default = RandomFactory;
//# sourceMappingURL=RandomFactory%20copy.js.map
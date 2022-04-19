"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAnimalFactory_1 = require("./AbstractAnimalFactory");
const Cat_1 = require("./Cat");
const Dog_1 = require("./Dog");
class FourLegsAnimalFactory extends AbstractAnimalFactory_1.default {
    createAnimal() {
        const random = Math.floor(Math.random() * 2) + 1;
        switch (random) {
            case 1:
                return new Dog_1.default();
            default:
                return new Cat_1.default();
        }
    }
}
exports.default = FourLegsAnimalFactory;
//# sourceMappingURL=FourLegsAnimalFactory.js.map
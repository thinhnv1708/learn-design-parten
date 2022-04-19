"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAnimalFactory_1 = require("./AbstractAnimalFactory");
const Bird_1 = require("./Bird");
const Chicken_1 = require("./Chicken");
class TwoLegsAnimalFactory extends AbstractAnimalFactory_1.default {
    createAnimal() {
        const random = Math.floor(Math.random() * 2) + 1;
        switch (random) {
            case 1:
                return new Bird_1.default();
            default:
                return new Chicken_1.default();
        }
    }
}
exports.default = TwoLegsAnimalFactory;
//# sourceMappingURL=TwoLegsAnimalFactory.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FourLegsAnimalFactory_1 = require("./Base/FourLegsAnimalFactory");
const TwoLegsAnimalFactory_1 = require("./Base/TwoLegsAnimalFactory");
let factory;
const type = Math.floor(Math.random() * 2) + 1;
switch (type) {
    case 1:
        factory = new FourLegsAnimalFactory_1.default();
        break;
    default:
        factory = new TwoLegsAnimalFactory_1.default();
        break;
}
factory.createAnimal().sayHi();
//# sourceMappingURL=main.js.map
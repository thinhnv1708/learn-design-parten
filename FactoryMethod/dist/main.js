"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicAnimalFactory_1 = require("./Base/BasicAnimalFactory");
const RandomAnimalFactory_1 = require("./Base/RandomAnimalFactory");
const randomAnimalFactory = new RandomAnimalFactory_1.default();
const basicAnimalFactory = new BasicAnimalFactory_1.default(2);
randomAnimalFactory.createAnimal().sayHi();
basicAnimalFactory.createAnimal().sayHi();
//# sourceMappingURL=main.js.map
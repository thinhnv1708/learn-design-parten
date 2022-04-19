"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bubble_1 = require("./Base/Bubble");
const EggPudding_1 = require("./Base/EggPudding");
const FruitPudding_1 = require("./Base/FruitPudding");
const MilkTea_1 = require("./Base/MilkTea");
const WhiteBubble_1 = require("./Base/WhiteBubble");
const BlackSugar_1 = require("./Base/BlackSugar");
const ourMilkTea = new BlackSugar_1.default(new EggPudding_1.default(new FruitPudding_1.default(new Bubble_1.default(new WhiteBubble_1.default(new MilkTea_1.default())))));
const x = new BlackSugar_1.default(new MilkTea_1.default());
console.log(ourMilkTea.Cost());
console.log(x.Cost());
//# sourceMappingURL=main.js.map
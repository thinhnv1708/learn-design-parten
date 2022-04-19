"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarBuilder_1 = require("./Base/CarBuilder");
const car = new CarBuilder_1.default()
    .AddEngineName('v8')
    .AddName('Tucson')
    .AddPaint('Pink')
    .AddWheels(4)
    .AddGlass('Khỉ đột 6')
    .Build();
car.showCarInfo();
//# sourceMappingURL=main.js.map
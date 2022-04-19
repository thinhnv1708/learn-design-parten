"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(name, engine, paintColor, wheels, glassType) {
        this.name = name;
        this.engine = engine;
        this.paintColor = paintColor;
        this.wheels = wheels;
        this.glassType = glassType;
    }
    showCarInfo() {
        console.log(this);
    }
}
exports.default = Car;
//# sourceMappingURL=Car.js.map
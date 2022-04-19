"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./Car");
class CarBuilder {
    AddEngineName(engine) {
        this.engine = engine;
        return this;
    }
    AddGlass(glassType) {
        this.glassType = glassType;
        return this;
    }
    AddName(name) {
        this.name = name;
        return this;
    }
    AddPaint(painColor) {
        this.paintColor = painColor;
        return this;
    }
    AddWheels(numberOfWheel) {
        this.wheels = numberOfWheel;
        return this;
    }
    Build() {
        return new Car_1.default(this.name, this.engine, this.paintColor, this.wheels, this.glassType);
    }
}
exports.default = CarBuilder;
//# sourceMappingURL=CarBuilder.js.map
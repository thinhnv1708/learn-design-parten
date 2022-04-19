"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnOffCommand {
    constructor(fan) {
        this.fan = fan;
    }
    execute() {
        this.fan.turnOff();
    }
    undo() {
        this.fan.turnOn();
    }
}
exports.default = TurnOffCommand;
//# sourceMappingURL=TurnOffCommand.js.map
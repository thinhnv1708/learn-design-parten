"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnOnCommand {
    constructor(fan) {
        this.fan = fan;
    }
    execute() {
        this.fan.turnOn();
    }
    undo() {
        this.fan.turnOff();
    }
}
exports.default = TurnOnCommand;
//# sourceMappingURL=TurnOnCommand.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Remote {
    constructor(turnOnCommand, turnOffCommand) {
        this.turnOnCommand = turnOnCommand;
        this.turnOffCommand = turnOffCommand;
    }
    turnOnButtonClick() {
        this.turnOnCommand.execute();
    }
    turnOffButtonClick() {
        this.turnOffCommand.execute();
    }
}
exports.default = Remote;
//# sourceMappingURL=Remote.js.map
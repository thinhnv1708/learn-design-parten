"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fan_1 = require("./Base/Fan");
const Remote_1 = require("./Base/Remote");
const TurnOffCommand_1 = require("./Base/TurnOffCommand");
const TurnOnCommand_1 = require("./Base/TurnOnCommand");
const fan = new Fan_1.default();
const remote = new Remote_1.default(new TurnOnCommand_1.default(fan), new TurnOffCommand_1.default(fan));
remote.turnOnButtonClick();
//# sourceMappingURL=main.js.map
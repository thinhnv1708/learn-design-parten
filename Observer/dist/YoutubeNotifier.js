"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observer_1 = require("./Observer");
var VideoData_1 = require("./VideoData");
var YoutubeNotifier = (function (_super) {
    __extends(YoutubeNotifier, _super);
    function YoutubeNotifier(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.addObserver(_this);
        return _this;
    }
    YoutubeNotifier.prototype.notify = function (subject, arg) {
        if (subject instanceof VideoData_1.default) {
            console.log('YoutubeNotifier: ', subject.getTitle(), subject.getDescription(), subject.getFileName());
        }
    };
    return YoutubeNotifier;
}(Observer_1.default));
exports.default = YoutubeNotifier;
//# sourceMappingURL=YoutubeNotifier.js.map
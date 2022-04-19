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
var Subject_1 = require("./Subject");
var VideoData = (function (_super) {
    __extends(VideoData, _super);
    function VideoData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoData.prototype.getTitle = function () {
        return this.title;
    };
    VideoData.prototype.setTitle = function (value) {
        this.title = value;
        this.videoDataChange();
    };
    VideoData.prototype.getDescription = function () {
        return this.description;
    };
    VideoData.prototype.setDescription = function (value) {
        this.description = value;
        this.videoDataChange();
    };
    VideoData.prototype.getFileName = function () {
        return this.fileName;
    };
    VideoData.prototype.setFileName = function (value) {
        this.fileName = value;
        this.videoDataChange();
    };
    VideoData.prototype.videoDataChange = function () {
        this.notify(this, null);
    };
    return VideoData;
}(Subject_1.default));
exports.default = VideoData;
//# sourceMappingURL=VideoData.js.map
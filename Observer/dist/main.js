"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneNotifier_1 = require("./PhoneNotifier");
var VideoData_1 = require("./VideoData");
var YoutubeNotifier_1 = require("./YoutubeNotifier");
var videoData = new VideoData_1.default();
var youtubeObserver = new YoutubeNotifier_1.default(videoData);
new PhoneNotifier_1.default(videoData);
videoData.setTitle('okok');
videoData.setDescription('descrip');
videoData.removeObserver(youtubeObserver);
videoData.setTitle('lol');
new YoutubeNotifier_1.default(videoData);
videoData.setTitle('x vido');
//# sourceMappingURL=main.js.map
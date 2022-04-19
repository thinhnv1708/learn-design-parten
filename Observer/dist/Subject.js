"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };
    Subject.prototype.notify = function (subject, arg) {
        this.observers.forEach(function (observer) { return observer.notify(subject, arg); });
    };
    return Subject;
}());
exports.default = Subject;
//# sourceMappingURL=Subject.js.map
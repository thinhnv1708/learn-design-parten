"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleSington {
    constructor() {
        this.random = Math.random();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ExampleSington();
        }
        return this.instance;
    }
    sayHi() {
        console.log('hi', this.random);
    }
}
exports.default = ExampleSington;
//# sourceMappingURL=ExampleSington.js.map
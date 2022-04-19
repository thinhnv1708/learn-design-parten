"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ticket = (function () {
    function Ticket() {
    }
    Ticket.prototype.getPromoteStrategy = function () {
        return this.promoteStrategy;
    };
    Ticket.prototype.setPromoteStrategy = function (promoteStrategy) {
        this.promoteStrategy = promoteStrategy;
    };
    Ticket.prototype.GetPrice = function () {
        return this.price;
    };
    Ticket.prototype.SetPrice = function (value) {
        this.price = value;
    };
    Ticket.prototype.GetName = function () {
        return this.name;
    };
    Ticket.prototype.SetName = function (value) {
        this.name = value;
    };
    Ticket.prototype.GetPromotePrice = function () {
        return this.promoteStrategy.DoDiscount(this.price);
    };
    return Ticket;
}());
exports.default = Ticket;
//# sourceMappingURL=Ticket.js.map
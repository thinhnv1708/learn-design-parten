"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HalfDiscountStrategy_1 = require("./HalfDiscountStrategy");
var NoDiscountStrategy_1 = require("./NoDiscountStrategy");
var QuarterDiscountStrategy_1 = require("./QuarterDiscountStrategy");
var Ticket_1 = require("./Ticket");
function main() {
    var ticket = new Ticket_1.default();
    ticket.SetPrice(100000);
    ticket.setPromoteStrategy(new HalfDiscountStrategy_1.default());
    console.log(ticket.GetPromotePrice());
    ticket.setPromoteStrategy(new NoDiscountStrategy_1.default());
    console.log(ticket.GetPromotePrice());
    ticket.setPromoteStrategy(new QuarterDiscountStrategy_1.default());
    console.log(ticket.GetPromotePrice());
}
main();
//# sourceMappingURL=main.js.map
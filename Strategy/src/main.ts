import HalfDiscountStrategy from './HalfDiscountStrategy'
import NoDiscountStrategy from './NoDiscountStrategy'
import QuarterDiscountStrategy from './QuarterDiscountStrategy'
import Ticket from './Ticket'

function main(): void {
    const ticket: Ticket = new Ticket()

    ticket.SetPrice(100000)
    ticket.setPromoteStrategy(new HalfDiscountStrategy())
    console.log(ticket.GetPromotePrice())
    ticket.setPromoteStrategy(new NoDiscountStrategy())
    console.log(ticket.GetPromotePrice())
    ticket.setPromoteStrategy(new QuarterDiscountStrategy())
    console.log(ticket.GetPromotePrice())
}

main()

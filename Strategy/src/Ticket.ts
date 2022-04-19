import IPromoteStrategy from './IPromoteStratregy'

export default class Ticket {
    private promoteStrategy: IPromoteStrategy
    private price: number
    private name: string

    // constructor(promoteStrategy: IPromoteStrategy) {
    //     this.promoteStrategy = promoteStrategy
    // }

    public getPromoteStrategy(): IPromoteStrategy {
        return this.promoteStrategy
    }

    public setPromoteStrategy(promoteStrategy: IPromoteStrategy): void {
        this.promoteStrategy = promoteStrategy
    }

    public GetPrice(): number {
        return this.price
    }

    public SetPrice(value: number): void {
        this.price = value
    }

    public GetName(): string {
        return this.name
    }

    public SetName(value: string): void {
        this.name = value
    }

    public GetPromotePrice(): number {
        return this.promoteStrategy.DoDiscount(this.price)
    }
}

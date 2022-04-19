import IPromoteStrategy from './IPromoteStratregy'

export default class HalfDiscountStrategy implements IPromoteStrategy {
    public DoDiscount(value: number): number {
        return value * 0.5
    }
}

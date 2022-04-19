import IPromoteStrategy from './IPromoteStratregy'

export default class NoDiscountStrategy implements IPromoteStrategy {
    public DoDiscount(value: number): number {
        return value
    }
}

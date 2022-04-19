import IPromoteStrategy from './IPromoteStratregy'

export default class QuarterDiscountStrategy implements IPromoteStrategy {
    public DoDiscount(value: number): number {
        return value * 0.75
    }
}

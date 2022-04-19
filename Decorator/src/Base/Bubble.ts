import IMilkTea from './IMilkTea'
import MilkTeaDecorator from './MilkTeaDecorator'

export default class Bubble extends MilkTeaDecorator {
    constructor(inner: IMilkTea) {
        super(inner)
    }

    public override Cost(): number {
        return 1 + this.milkTea.Cost()
    }
}

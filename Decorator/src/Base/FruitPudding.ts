import IMilkTea from './IMilkTea'
import MilkTeaDecorator from './MilkTeaDecorator'

export default class FruitPudding extends MilkTeaDecorator {
    constructor(inner: IMilkTea) {
        super(inner)
    }

    public override Cost(): number {
        return 3 + this.milkTea.Cost()
    }
}

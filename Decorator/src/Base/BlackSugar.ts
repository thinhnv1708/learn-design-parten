import IMilkTea from './IMilkTea'
import MilkTeaDecorator from './MilkTeaDecorator'

export default class BlackSugar extends MilkTeaDecorator {
    constructor(inner: IMilkTea) {
        super(inner)
    }

    public override Cost(): number {
        return 2 + this.milkTea.Cost()
    }
}

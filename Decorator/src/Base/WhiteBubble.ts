import IMilkTea from './IMilkTea'
import MilkTeaDecorator from './MilkTeaDecorator'

export default class WhiteBubble extends MilkTeaDecorator {
    constructor(inner: IMilkTea) {
        super(inner)
    }

    public override Cost(): number {
        return 1.5 + this.milkTea.Cost()
    }
}

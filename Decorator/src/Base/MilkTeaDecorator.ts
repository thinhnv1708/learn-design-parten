import IMilkTea from './IMilkTea'

export default abstract class MilkTeaDecorator implements IMilkTea {
    protected milkTea: IMilkTea

    constructor(inner: IMilkTea) {
        this.milkTea = inner
    }

    public Cost(): number {
        return this.milkTea.Cost()
    }
}

import Car from './Car'
import ICarBuilder from './ICarBuilder'

export default class CarBuilder implements ICarBuilder {
    protected engine: string
    protected wheels: number
    protected paintColor: string
    protected name: string
    protected glassType: string

    public AddEngineName(engine: string): ICarBuilder {
        this.engine = engine
        return this
    }

    public AddGlass(glassType: string): ICarBuilder {
        this.glassType = glassType
        return this
    }

    public AddName(name: string): ICarBuilder {
        this.name = name
        return this
    }

    public AddPaint(painColor: string): ICarBuilder {
        this.paintColor = painColor
        return this
    }

    public AddWheels(numberOfWheel: number): ICarBuilder {
        this.wheels = numberOfWheel
        return this
    }

    public Build(): Car {
        return new Car(
            this.name,
            this.engine,
            this.paintColor,
            this.wheels,
            this.glassType
        )
    }
}

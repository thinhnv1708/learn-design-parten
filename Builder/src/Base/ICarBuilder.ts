import Car from './Car'

export default interface ICarBuilder {
    AddName(name: string): ICarBuilder
    AddEngineName(engine: string): ICarBuilder
    AddWheels(numberOfWheel: number): ICarBuilder
    AddPaint(painColor: string): ICarBuilder
    AddGlass(glassType: string): ICarBuilder
    Build(): Car
}

import IAnimal from './IAnimal'

export default abstract class FourLegsAnimal implements IAnimal {
    abstract sayHi(): void
}

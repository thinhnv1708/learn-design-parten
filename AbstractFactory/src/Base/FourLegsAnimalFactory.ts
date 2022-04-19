import AbstractAnimalFactory from './AbstractAnimalFactory'
import Cat from './Cat'
import Dog from './Dog'
import IAnimal from './IAnimal'

export default class FourLegsAnimalFactory extends AbstractAnimalFactory {
    public createAnimal(): IAnimal {
        const random = Math.floor(Math.random() * 2) + 1
        switch (random) {
            case 1:
                return new Dog()
            default:
                return new Cat()
        }
    }
}

import Bird from './Bird'
import Cat from './Cat'
import Dog from './Dog'
import IAnimal from './IAnimal'
import IAnimalFactory from './IAnimalFactory'

export default class RandomAnimalFactory implements IAnimalFactory {
    public createAnimal(): IAnimal {
        const random = Math.floor(Math.random() * 3) + 1

        switch (random) {
            case 1:
                return new Bird()
            case 2:
                return new Dog()
            default:
                return new Cat()
        }
    }
}

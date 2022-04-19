import Bird from './Bird'
import Cat from './Cat'
import Dog from './Dog'
import IAnimal from './IAnimal'
import IAnimalFactory from './IAnimalFactory'

export default class BasicAnimalFactory implements IAnimalFactory {
    private index: number
    constructor(index: number) {
        this.index = index
    }
    public createAnimal(): IAnimal {
        switch (this.index) {
            case 1:
                return new Bird()
            case 2:
                return new Dog()
            case 3:
                return new Cat()
            default:
                return null
        }
    }
}

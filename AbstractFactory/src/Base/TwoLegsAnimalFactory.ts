import AbstractAnimalFactory from './AbstractAnimalFactory'
import Bird from './Bird'
import Chicken from './Chicken'
import IAnimal from './IAnimal'

export default class TwoLegsAnimalFactory extends AbstractAnimalFactory {
    public createAnimal(): IAnimal {
        const random = Math.floor(Math.random() * 2) + 1
        switch (random) {
            case 1:
                return new Bird()
            default:
                return new Chicken()
        }
    }
}

import FourLegsAnimalFactory from './Base/FourLegsAnimalFactory'
import IAnimalFactory from './Base/IAnimalFactory'
import TwoLegsAnimalFactory from './Base/TwoLegsAnimalFactory'

let factory: IAnimalFactory

const type = Math.floor(Math.random() * 2) + 1

switch (type) {
    case 1:
        factory = new FourLegsAnimalFactory()
        break
    default:
        factory = new TwoLegsAnimalFactory()
        break
}
factory.createAnimal().sayHi()

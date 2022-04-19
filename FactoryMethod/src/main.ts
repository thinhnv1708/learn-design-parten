import BasicAnimalFactory from './Base/BasicAnimalFactory'
import RandomAnimalFactory from './Base/RandomAnimalFactory'
const randomAnimalFactory: RandomAnimalFactory = new RandomAnimalFactory()
const basicAnimalFactory: BasicAnimalFactory = new BasicAnimalFactory(2)

randomAnimalFactory.createAnimal().sayHi()
basicAnimalFactory.createAnimal().sayHi()

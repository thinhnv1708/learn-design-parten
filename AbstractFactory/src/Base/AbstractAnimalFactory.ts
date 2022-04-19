import IAnimal from './IAnimal'
import IAnimalFactory from './IAnimalFactory'

export default abstract class AbstractAnimalFactory implements IAnimalFactory {
    public abstract createAnimal(): IAnimal
}

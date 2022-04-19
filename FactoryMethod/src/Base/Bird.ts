import IAnimal from './IAnimal'

export default class Bird implements IAnimal {
    public sayHi(): void {
        console.log('Bird')
    }
}

import IAnimal from './IAnimal'

export default class Dog implements IAnimal {
    public sayHi(): void {
        console.log('Dog')
    }
}

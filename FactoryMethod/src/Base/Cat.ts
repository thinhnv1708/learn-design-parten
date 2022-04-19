import IAnimal from './IAnimal'

export default class Cat implements IAnimal {
    public sayHi(): void {
        console.log('Cat')
    }
}

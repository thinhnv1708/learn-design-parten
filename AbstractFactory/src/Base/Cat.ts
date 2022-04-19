import FourLegsAnimal from './FourLegsAnimal'

export default class Cat implements FourLegsAnimal {
    public sayHi(): void {
        console.log('Cat')
    }
}

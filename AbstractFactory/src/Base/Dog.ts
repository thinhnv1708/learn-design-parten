import FourLegsAnimal from './FourLegsAnimal'

export default class Dog implements FourLegsAnimal {
    public sayHi(): void {
        console.log('Dog')
    }
}

import TwoLegsAnimal from './TwoLegsAnimal'

export default class Bird implements TwoLegsAnimal {
    public sayHi(): void {
        console.log('Bird')
    }
}

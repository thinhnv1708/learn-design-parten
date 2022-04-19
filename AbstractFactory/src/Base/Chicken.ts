import TwoLegsAnimal from './TwoLegsAnimal'

export default class Chicken implements TwoLegsAnimal {
    public sayHi(): void {
        console.log('Chicken')
    }
}

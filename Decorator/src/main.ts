import Bubble from './Base/Bubble'
import EggPudding from './Base/EggPudding'
import FruitPudding from './Base/FruitPudding'
import MilkTea from './Base/MilkTea'
import WhiteBubble from './Base/WhiteBubble'
import BlackSugar from './Base/BlackSugar'

const ourMilkTea = new BlackSugar(
    new EggPudding(new FruitPudding(new Bubble(new WhiteBubble(new MilkTea()))))
)

const x = new BlackSugar(new MilkTea())

console.log(ourMilkTea.Cost())
console.log(x.Cost())

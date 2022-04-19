import Fan from './Fan'
import ICommand from './ICommand'

export default class TurnOnCommand implements ICommand {
    private fan: Fan

    constructor(fan: Fan) {
        this.fan = fan
    }

    public execute(): void {
        this.fan.turnOn()
    }

    public undo(): void {
        this.fan.turnOff()
    }
}

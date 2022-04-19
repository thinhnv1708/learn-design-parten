import Fan from './Fan'
import ICommand from './ICommand'

export default class TurnOffCommand implements ICommand {
    private fan: Fan

    constructor(fan: Fan) {
        this.fan = fan
    }

    public execute(): void {
        this.fan.turnOff()
    }

    public undo(): void {
        this.fan.turnOn()
    }
}

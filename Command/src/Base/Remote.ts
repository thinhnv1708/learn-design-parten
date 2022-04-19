import ICommand from './ICommand'

export default class Remote {
    private turnOnCommand: ICommand
    private turnOffCommand: ICommand
    constructor(turnOnCommand: ICommand, turnOffCommand: ICommand) {
        this.turnOnCommand = turnOnCommand
        this.turnOffCommand = turnOffCommand
    }

    public turnOnButtonClick(): void {
        this.turnOnCommand.execute()
    }

    public turnOffButtonClick(): void {
        this.turnOffCommand.execute()
    }
}

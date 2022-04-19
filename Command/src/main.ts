import Fan from './Base/Fan'
import Remote from './Base/Remote'
import TurnOffCommand from './Base/TurnOffCommand'
import TurnOnCommand from './Base/TurnOnCommand'

const fan = new Fan()

const remote = new Remote(new TurnOnCommand(fan), new TurnOffCommand(fan))

remote.turnOnButtonClick()
remote.turnOnButtonClick()


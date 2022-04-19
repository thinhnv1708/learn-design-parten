import Observer from './Observer'
import Subject from './Subject'
import VideoData from './VideoData'

export default class PhoneNotifier extends Observer {
    constructor(subject: Subject) {
        super()
        this.subject = subject
        this.subject.addObserver(this)
    }
    public override notify(subject: Subject, arg: object): void {
        if (subject instanceof VideoData) {
            console.log(
                'PhoneNotifier: ',
                subject.getTitle(),
                subject.getDescription(),
                subject.getFileName()
            )
        }
    }
}

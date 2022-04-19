import Observer from './Observer'

export default class Subject {
    private observers: Observer[] = []

    public addObserver(observer: Observer) {
        this.observers.push(observer)
    }

    public removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer)
        if (index >= 0) {
            this.observers.splice(index, 1)
        }
    }

    public notify(subject: Subject, arg: object) {
        this.observers.forEach((observer) => observer.notify(subject, arg))
    }
}

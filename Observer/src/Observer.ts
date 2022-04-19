import Subject from './Subject'

export default abstract class Observer {
    protected subject: Subject
    public abstract notify(subject: Subject, arg: object): void
}

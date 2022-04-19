import Subject from './Subject'

export default class VideoData extends Subject {
    private title: string
    private description: string
    private fileName: string

    public getTitle(): string {
        return this.title
    }

    public setTitle(value: string): void {
        this.title = value
        this.videoDataChange()
    }

    public getDescription(): string {
        return this.description
    }

    public setDescription(value: string): void {
        this.description = value
        this.videoDataChange()
    }

    public getFileName(): string {
        return this.fileName
    }

    public setFileName(value: string): void {
        this.fileName = value
        this.videoDataChange()
    }

    public videoDataChange(): void {
        this.notify(this, null)
    }
}

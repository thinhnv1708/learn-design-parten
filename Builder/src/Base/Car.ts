export default class Car {
    private engine: string
    private wheels: number
    private paintColor: string
    private name: string
    private glassType: string

    constructor(
        name: string,
        engine: string,
        paintColor: string,
        wheels: number,
        glassType: string
    ) {
        this.name = name
        this.engine = engine
        this.paintColor = paintColor
        this.wheels = wheels
        this.glassType = glassType
    }

    public showCarInfo(): void {
        console.log(this)
    }
}

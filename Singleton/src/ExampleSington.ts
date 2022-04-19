export default class ExampleSington {
    private static instance: ExampleSington
    private random: number
    public static getInstance() {
        if (!this.instance) {
            this.instance = new ExampleSington()
        }

        return this.instance
    }

    constructor() {
        this.random = Math.random()
    }

    public sayHi() {
        console.log('hi', this.random)
    }
}

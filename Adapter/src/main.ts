interface IShape {
    draw(): void
}

class LineAdapter implements IShape {
    private readonly legacyLine: LegacyLine
    constructor(legacyLine: LegacyLine) {
        this.legacyLine = legacyLine
    }
    public draw(): void {}
}

class RectAdaper implements IShape {
    private readonly legacyRect: LegacyRect
    constructor(legacyRect: LegacyRect) {
        this.legacyRect = legacyRect
    }
    public draw(): void {}
}

class LegacyLine {
    public draw(x1: number, y1: number, x2: number, y2: number): void {
        console.log('Drawing line')
    }
}

class LegacyRect {
    public draw(x: number, y: number, w: number, h: number): void {
        console.log('Drawing rect')
    }
}

const shapes: IShape[] = [new LineAdapter()]

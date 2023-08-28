class LineAdapter {
    constructor(legacyLine) {
        this.legacyLine = legacyLine;
    }
    draw() { }
}
class RectAdaper {
    constructor(legacyRect) {
        this.legacyRect = legacyRect;
    }
    draw() { }
}
class LegacyLine {
    draw(x1, y1, x2, y2) {
        console.log('Drawing line');
    }
}
class LegacyRect {
    draw(x, y, w, h) {
        console.log('Drawing rect');
    }
}
const shapes = [new LineAdapter(new LegacyLine())];
//# sourceMappingURL=main.js.map
export default class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set xVertice(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set yVertice(y) {
        this.#y = y;
    }

    distancia(v) {
        let d = Math.sqrt(((v.x - this.x) * (v.x - this.x)) + ((v.y - this.y) * (v.y - this.y)));
        return d;
    }

    move(x2, y2) {
        this.#x = x2;
        this.#y = y2;
        return true;
    }

    equals(v) {
        if (this.x == v.x && this.y == v.y) {
            return true;
        }

        return false;
    }
}
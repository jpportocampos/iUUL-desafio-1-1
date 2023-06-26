import PromptSync from 'prompt-sync';

class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set y(y) {
        this.#y = y;
    }

    //dAB² = (xB – xA)² + (yB – yA)²
    distancia(x2, y2) {
        return ((x2 - this.x)^2) + ((y2 - this.y)^2);
    }

    move(x2, y2) {
        this.#x = x2;
        this.#y = y2;
        return true;
    }

    equals(v) {
        if(this.x === v.x && this.y === v.y) {
            return true;
        }

        return false;
    }
}

const prompt = PromptSync({ sigint: true });

let x1 = prompt('Digite o X do primeiro Vértice: ');
let y1 = prompt('Digite o Y do primeiro Vértice: ');

let v1 = new Vertice(x1, y1);

let x2 = prompt('Digite o X do segundo Vértice: ');
let y2 = prompt('Digite o X do segundo Vértice: '); 

let v2 = new Vertice(x2, y2);

let x3 = prompt('Digite o X do terceiro Vértice: ');
let y3 = prompt('Digite o X do terceiro Vértice: '); 

let v3 = new Vertice(x3, y3);

console.log(v1.distancia(v2.x, v2.y));
console.log(v2.distancia(v3.x, v3.y));
console.log(v3.distancia(v1.x, v1.y));
console.log(v1.move(5, 10));
console.log(v1.distancia(v2.x, v2.y));
console.log(v1.equals(v2));
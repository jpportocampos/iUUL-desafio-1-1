import PromptSync from 'prompt-sync';
import { Vertice } from './questao1.js';

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

class Triangulo {
    #v1;
    #v2;
    #v3;

    constructor(v1, v2, v3) {
        if (this.#verificaTriangulo(v1, v2, v3)) {
            this.#v1 = v1;
            this.#v2 = v2;
            this.#v3 = v3;
        } else {
            throw new UserException("Estes vértices não resultam em um triângulo");
        }
    }

    get v1() {
        return this.#v1;
    }

    set v1(v1) {
        this.#v1 = v1;
    }

    get v2() {
        return this.#v2;
    }

    set v2(v2) {
        this.#v2 = v2;
    }

    get v3() {
        return this.#v3;
    }

    set v3(v3) {
        this.#v3 = v3;
    }

    get perimetro() {
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);

        return d1 + d2 + d3;
    }

    get area() {
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);
        let p = this.perimetro;

        let s = p/2;
        let a = Math.sqrt((s * (s - d1) * (s - d2) * (s - d3)));

        return a;
    }

    equals(t2) {
        if (this.v1 == t2.v1 && this.v2 == t2.v2 && this.v3 == t2.v3) {
            return true;
        }

        return false;
    }

    tipo() {
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);

        if(d1 != d2 && d1 != d3 && d2 != d3) {
            return "escaleno";
        }

        if((d1 == d2 && d1 != d3 && d2 != d3) || (d2 == d3 && d2 != d1 && d3 != d1) || (d1 == d3 && d1 != d2 && d3 != d2)) {
            return "isósceles";
        }

        if(d1 == d2 && d1 == d3 && d2 == d3) {
            return "equilátero";
        }
    }

    clone() {
        let t = new Triangulo(this.v1, this.v2, this.v3);
        return t;
    }

    #verificaTriangulo(v1, v2, v3) {
        let d1 = v1.distancia(v2);
        let d2 = v2.distancia(v3);
        let d3 = v3.distancia(v1);

        if ((Math.abs(d2 - d3) < d1 && d1 < d2 + d3) && (Math.abs(d1 - d3) < d2 && d2 < d1 + d3) && (Math.abs(d1 - d2) < d3 && d3 < d1 + d2)) {
            return true;
        }

        return false;
    }
}

const prompt = PromptSync({ sigint: true });

let x1 = prompt('Digite o X do primeiro Vértice do primeiro Triângulo: ');
let y1 = prompt('Digite o Y do primeiro Vértice do primeiro Triângulo: ');

let v1 = new Vertice(x1, y1);

let x2 = prompt('Digite o X do segundo Vértice do primeiro Triângulo: ');
let y2 = prompt('Digite o Y do segundo Vértice do primeiro Triângulo: ');

let v2 = new Vertice(x2, y2);

let x3 = prompt('Digite o X do terceiro Vértice do primeiro Triângulo: ');
let y3 = prompt('Digite o Y do terceiro Vértice do primeiro Triângulo: ');

let v3 = new Vertice(x3, y3);

let t1 = new Triangulo(v1, v2, v3);

let x4 = prompt('Digite o X do primeiro Vértice do segundo Triângulo: ');
let y4 = prompt('Digite o Y do primeiro Vértice do segundo Triângulo: ');

let v4 = new Vertice(x4, y4);

let x5 = prompt('Digite o X do segundo Vértice do segundo Triângulo: ');
let y5 = prompt('Digite o Y do segundo Vértice do segundo Triângulo: ');

let v5 = new Vertice(x5, y5);

let x6 = prompt('Digite o X do terceiro Vértice do segundo Triângulo: ');
let y6 = prompt('Digite o Y do terceiro Vértice do segundo Triângulo: ');

let v6 = new Vertice(x6, y6);

let t2 = new Triangulo(v4, v5, v6);

let x7 = prompt('Digite o X do primeiro Vértice do terceiro Triângulo: ');
let y7 = prompt('Digite o Y do primeiro Vértice do terceiro Triângulo: ');

let v7 = new Vertice(x7, y7);

let x8 = prompt('Digite o X do segundo Vértice do terceiro Triângulo: ');
let y8 = prompt('Digite o Y do segundo Vértice do terceiro Triângulo: ');

let v8 = new Vertice(x8, y8);

let x9 = prompt('Digite o X do terceiro Vértice do terceiro Triângulo: ');
let y9 = prompt('Digite o Y do terceiro Vértice do terceiro Triângulo: ');

let v9 = new Vertice(x9, y9);

let t3 = new Triangulo(v7, v8, v9);

let t4 = t1.clone();

console.log("Verificando se são iguais: ");
console.log("T1 é igual a T3? " + t1.equals(t3));
console.log("T2 é igual a T1? " + t2.equals(t1));
console.log("T1 é igual ao seu clone? " + t1.equals(t4));
console.log("Verificando os tipos: ");
console.log("T1: " + t1.tipo());
console.log("T2: " + t2.tipo());
console.log("T3: " + t3.tipo());
console.log("Clone de T1: " + t4.tipo());
console.log("Verificando os perímetros: ");
console.log("T1: " + t1.perimetro);
console.log("T2: " + t2.perimetro);
console.log("T3: " + t3.perimetro);
console.log("Clone de T1: " + t4.perimetro);
console.log("Verificando as áreas: ");
console.log("T1: " + t1.area);
console.log("T2: " + t2.area);
console.log("T3: " + t3.area);
console.log("T4: " + t4.area);
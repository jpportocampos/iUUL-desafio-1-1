import PromptSync from 'prompt-sync';
import Vertice from './vertice.js';
import Triangulo from './triangulo.js';

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
console.log("Clone de T1: " + t4.area);
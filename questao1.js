import PromptSync from 'prompt-sync';
import Vertice from './vertice.js';

const prompt = PromptSync({ sigint: true });

let x1 = prompt('Digite o X do primeiro Vértice: ');
let y1 = prompt('Digite o Y do primeiro Vértice: ');

let v1 = new Vertice(x1, y1);

let x2 = prompt('Digite o X do segundo Vértice: ');
let y2 = prompt('Digite o Y do segundo Vértice: ');

let v2 = new Vertice(x2, y2);

let x3 = prompt('Digite o X do terceiro Vértice: ');
let y3 = prompt('Digite o Y do terceiro Vértice: ');

let v3 = new Vertice(x3, y3);

console.log("Distância entre V1 e V2: " + v1.distancia(v2));
console.log("Distância entre V2 e V3: " + v2.distancia(v3));
console.log("Distância entre V3 e V1: " + v3.distancia(v1));
console.log("Movendo as coordenadas de V1: " + v1.move(4, 4));
console.log("Nova distância entre V1 e V2: " + v1.distancia(v2));
console.log("V1 e V2 são iguais? " + v1.equals(v2));
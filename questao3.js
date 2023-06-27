import PromptSync from 'prompt-sync';
import Vertice from './vertice.js';
import Poligono from './poligono.js';

const prompt = PromptSync({ sigint: true });

const vertices = [];

let n = prompt('Quantos vértices terá o seu polígono? ');
let cont = 1;

for (let index = 0; index < n; index++) {
    console.log("Vértice " + cont);
    vertices.push(criaVertice());
    cont++;
}

function criaVertice() {
    let x = prompt('Digite o X do Vértice: ');
    let y = prompt('Digite o Y do Vértice: ');

    let v = new Vertice(x, y);

    return v;
}

let p = new Poligono(vertices);

console.log("Quantidade de vértices do polígono: " + p.qtdVertices);
console.log("Perímetro do polígono: " + p.perimetro);

let x = prompt('Digite o X do Vértice a ser adicionado: ');
let y = prompt('Digite o Y do Vértice a ser adicionado: ');

let v = new Vertice(x, y);

if (p.addVertice(v)) {
    console.log("Quantidade nova de vértices do polígono: " + p.qtdVertices);
    console.log("Perímetro novo do polígono: " + p.perimetro);
} else {
    console.log("O vértice já existe");
}
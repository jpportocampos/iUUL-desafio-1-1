import PromptSync from 'prompt-sync';
import Cliente from "./cliente.js";

const prompt = PromptSync({ sigint: true });

let nome = prompt('Digite o nome do cliente: ');

while (nome.length < 5) {
    nome = prompt('O nome precisa ter mais do que 5 caracteres. Digite novamente: ');
}

let cpf = prompt('Digite o cpf do cliente: ');

while (cpf.length !== 11) {
    cpf = prompt('O cpf precisa ter exatamente 11 números. Digite novamente: ');
}

let diaNascimento = prompt('Digite o dia de nascimento do cliente (formato dd): ');

while (diaNascimento.length < 2) {
    diaNascimento = prompt('O dia precisa estar no formato solicitado (dd). Digite novamente: ');
}

let mesNascimento = prompt('Digite o mês do nascimento do cliente (formato mm): ');

while (mesNascimento.length < 2) {
    mesNascimento = prompt('O mês precisa estar no formato solicitado (mm). Digite novamente: ');
}

let anoNascimento = prompt('Digite o ano de nascimento do cliente (formato aaaa): ');

while (anoNascimento.length < 4) {
    anoNascimento = prompt('O ano precisa estar no formato solicitado (aaaa). Digite novamente: ');
}

let dataNascimento = new Date(mesNascimento + ' ' + diaNascimento + ' ' + anoNascimento);
let hoje = new Date();

let diffEmMs = hoje - dataNascimento;
let diffEmAnos = diffEmMs / (1000 * 60 * 60 * 24 * 365);

while (diffEmAnos < 18) {
    mesNascimento = prompt('O cliente precisa ter mais do que 18 anos. Digite novamente o mês: ');
    diaNascimento = prompt('Digite novamente o dia: ');
    anoNascimento = prompt('Digite nomavente o ano: ');

    dataNascimento = new Date(mesNascimento + ' ' + diaNascimento + ' ' + anoNascimento);
    diffEmMs = hoje - dataNascimento;
    diffEmAnos = diffEmMs / (1000 * 60 * 60 * 24 * 365);
}

let rendaMensal = prompt('Digite a renda mensal do cliente: ');

while (rendaMensal < 0) {
    rendaMensal = prompt('A renda mensal precisa ser pelo menos 0. Digite novamente: ');
}

let estadoCivil = prompt('Digite o estado civil (C, S, V ou D): ');

while (estadoCivil.toUpperCase() != "C" && estadoCivil.toUpperCase() != "S" && estadoCivil.toUpperCase() != "V" && estadoCivil.toUpperCase() != "D") {
    estadoCivil = prompt('O estado civil precisa ser um dos valores a seguir: C, S, V ou D. Digite novamente: ');
}

let dependentes = prompt('Digite a quantidade de dependentes do cliente: ');

while (dependentes < 0 || dependentes > 10) {
    dependentes = prompt('O número de dependentes deve ser pelo menos 0 e no máximo 10. Digite novamente: ');
}

let cliente = new Cliente(nome, cpf, dataNascimento, rendaMensal, estadoCivil, dependentes);

cliente.imprime();
import PromptSync from 'prompt-sync';
import Aluno from "./aluno.js";
import Turma from "./turma.js";

const prompt = PromptSync({ sigint: true });

const alunos = [];

let n = prompt('Quantos alunos serão inscritos na turma? ');
let cont = 1;

for (let index = 0; index < n; index++) {
    console.log("Aluno " + cont);
    alunos.push(criaAluno());
    cont++;
}

function criaAluno() {
    let matricula = prompt('Digite a matrícula do aluno: ');
    let nome = prompt('Digite o nome do aluno: ');

    let aluno = new Aluno(matricula, nome);

    return aluno;
}

let t = new Turma(alunos);

if (t.alunos !== undefined) {
    let n1 = prompt('Quantas notas serão lançadas? ');
    let cont1 = 1;
    
    for (let index = 0; index < n1; index++) {
        console.log("Nota " + cont1);
        lancaNota();
        cont1++;
    }
    
    function lancaNota() {
        let matricula = prompt('Digite a matrícula do aluno: ');
        let nota = prompt('Digite a nota do aluno: ');
        let prova = prompt('Digite a prova que recebeu esta nota: ');
    
        t.lancaNota(matricula, nota, prova);
    }
    
    t.imprime();
    
    let novo = prompt('Gostaria de inserir um novo aluno na turma? (Digite "sim" caso queira) ')
    
    if (novo == 'sim') {
        let matriculaNovo = prompt('Digite a matrícula do aluno: ');
        let nomeNovo = prompt('Digite o nome do aluno: ');
    
        let alunoNovo = new Aluno(matriculaNovo, nomeNovo);
    
        t.addAluno(alunoNovo);
        t.imprime();
    } 
    
    let remove = prompt('Gostaria de remover um aluno da turma? (Digite "sim" caso queira) ')
    
    if (remove == 'sim') {
        let matriculaRemove = prompt('Digite a matrícula do aluno: ');
    
        t.removeAluno(matriculaRemove);
        t.imprime();
    } 
}
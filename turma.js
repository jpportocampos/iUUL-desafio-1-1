import Aluno from "./aluno.js";

export default class Turma {
    #alunos;

    constructor(alunos) {
        this.#alunos = alunos;
    }

    get alunos() {
        return this.#alunos;
    }

    set alunos(alunos) {
        this.#alunos = alunos;
    }

    addAluno(aluno) {
        for (let index = 0; index < this.alunos.length - 1; index++) {
            if (aluno.matricula == this.alunos[index].matricula) {
                return false;
            }
        }

        this.#alunos.push(aluno);

        return true;
    }

    removeAluno(matricula) {
        for (let index = 0; index < this.alunos.length; index++) {
            if (this.alunos[index].matricula == matricula) {
                this.#alunos.splice(index, 1);
            }
        }
    }

    lancaNota(matricula, nota, prova) {
        for (let index = 0; index < this.alunos.length; index++) {
            if (this.alunos[index].matricula == matricula) {
                if (prova == "p1") {
                    this.alunos[index].p1(nota);
                    return true;
                }
                if (prova == "p2") {
                    this.alunos[index].p2(nota);
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    imprime() {
        let alunosOrd = this.#organizaAlunos();

        console.log('—---------------------------------------');
        console.log('Matricula Nome               P1  P2  NF');
        console.log('—---------------------------------------');
        for (let index = 0; index < alunosOrd.length; index++) {
            if (alunosOrd[index].p1 === undefined) {
                console.log(' ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '     ' + ' - ' + ' ' + alunosOrd[index].p2.toFixed(1) + ' ' + (alunosOrd[index].p2 / 2).toFixed(1));
            } else if (alunosOrd[index].p2 === undefined) {
                console.log(' ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '     ' + alunosOrd[index].p1.toFixed(1) + ' ' + ' - ' + ' ' + (alunosOrd[index].p1 / 2).toFixed(1));
            } else if (alunosOrd[index].p1 === undefined && alunosOrd[index].p2 === undefined) {
                console.log(' ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '     ' + ' - ' + ' ' + ' - ' + ' ' + '0.0');
            } else {
                console.log(' ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '     ' + alunosOrd[index].p1.toFixed(1) + ' ' + alunosOrd[index].p2.toFixed(1) + ' ' + ((alunosOrd[index].p1 + alunosOrd[index].p2) / 2).toFixed(1))
            }
        }
        console.log('—---------------------------------------');
    }

    #organizaAlunos() {
        const nomes = [];
        const alunosSort = [];

        for (let index = 0; index < this.alunos.length; index++) {
            nomes.push(this.alunos[index].nome)
        }

        nomes = nomes.sort();

        for (let index = 0; index < nomes.length; index++) {
            for (let index = 0; index < this.alunos.length; index++) {
                if (this.alunos[index].nome == nomes[index]) {
                    alunosSort.push(this.alunos[index]);
                }
            }
        }

        return alunosSort;
    }
}
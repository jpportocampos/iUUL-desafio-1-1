export default class Turma {
    #alunos;

    constructor(alunos) {
        if (this.#verificaMatriculas(alunos)) {
            this.#alunos = alunos;
        } else {
            console.log('Os alunos precisam ter matrículas únicas.')
        }
    }

    get alunos() {
        return this.#alunos;
    }

    set alunosTurma(alunos) {
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
                    this.alunos[index].p1Aluno = nota;
                    return true;
                }
                if (prova == "p2") {
                    this.alunos[index].p2Aluno = nota;
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
            let prova1 = alunosOrd[index].p1;
            let prova2 = alunosOrd[index].p2;

            if (prova1 == ' - ' && prova2 !== ' - ') {
                console.log('    ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '              ' + prova1 + ' ' + parseFloat(prova2).toFixed(1) + ' ' + (parseFloat(prova2) / 2).toFixed(1));
            } else if (prova2 == ' - ' && prova1 !== ' - ') {
                console.log('    ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '              ' + parseFloat(prova1).toFixed(1) + ' ' + prova2 + ' ' + (parseFloat(prova1) / 2).toFixed(1));
            } else if (prova1 == ' - ' && prova2 == ' - ') {
                console.log('    ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '              ' + prova1 + ' ' + prova2 + ' ' + '0.0');
            } else {
                console.log('    ' + alunosOrd[index].matricula + '    ' + alunosOrd[index].nome + '              ' + parseFloat(prova1).toFixed(1) + ' ' + parseFloat(prova2).toFixed(1) + ' ' + ((parseFloat(prova1) + parseFloat(prova2)) / 2).toFixed(1))
            }
        }
        console.log('—---------------------------------------');
    }

    #verificaMatriculas(alunos) {
        for (let index = 0; index < alunos.length - 1; index++) {
            let matricula = alunos[index].matricula;
            for (let index = 1; index < alunos.length; index++) {
                if (alunos[index].matricula == matricula) {
                    return false;
                }
            }
        }

        return true;
    }

    #organizaAlunos() {
        let nomes = [];
        let alunosSort = [];

        for (let index = 0; index < this.alunos.length; index++) {
            nomes.push(this.alunos[index].nome)
        }

        nomes = nomes.sort();

        for (let index = 0; index < nomes.length; index++) {
            let n = nomes[index];
            for (let index = 0; index < this.alunos.length; index++) {
                if (this.alunos[index].nome == n) {
                    alunosSort.push(this.alunos[index]);
                }
            }
        }

        return alunosSort;
    }
}
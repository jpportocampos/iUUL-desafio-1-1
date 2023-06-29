export default class Aluno {
    #matricula;
    #nome;
    #p1;
    #p2;

    constructor(matricula, nome) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#p1 = ' - ';
        this.#p2 = ' - ';
    }

    get matricula() {
        return this.#matricula;
    }

    set matriculaAluno(matricula) {
        this.#matricula = matricula;
    }

    get nome() {
        return this.#nome;
    }

    set nomeAluno(nome) {
        this.#nome = nome;
    }

    get p1() {
        return this.#p1;
    }

    set p1Aluno(p1) {
        this.#p1 = p1;
    }

    get p2() {
        return this.#p2;
    }

    set p2Aluno(p2) {
        this.#p2 = p2;
    }
}
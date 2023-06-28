export default class Aluno {
    #matricula;
    #nome;
    #p1;
    #p2;

    constructor(matricula, nome) {
        this.#matricula = matricula;
        this.#nome = nome;
    }

    get matricula() {
        return this.#matricula;
    }

    set matricula(matricula) {
        this.#matricula = matricula;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get p1() {
        return this.#p1;
    }

    set p1(p1) {
        this.#p1 = p1;
    }

    get p2() {
        return this.#p2;
    }

    set p2(p2) {
        this.#p2 = p2;
    }
}
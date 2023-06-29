export default class Cliente {
    #nome;
    #cpf;
    #dataNascimento;
    #rendaMensal;
    #estadoCivil;
    #dependentes;

    constructor(nome, cpf, dataNascimento, rendaMensal, estadoCivil, dependentes) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento;
        this.#rendaMensal = parseFloat(rendaMensal);
        this.#estadoCivil = estadoCivil;
        this.#dependentes = dependentes;
    }

    get nome() {
        return this.#nome;
    }

    set nomeCliente(nome) {
        this.#nome = nome;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpfCliente(cpf) {
        this.#cpf = cpf;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    set dataNascimentoCliente(dataNascimento) {
        this.#dataNascimento = dataNascimento;
    }

    get rendaMensal() {
        return this.#rendaMensal;
    }

    set rendaMensalCliente(rendaMensal) {
        this.#rendaMensal = rendaMensal;
    }

    get estadoCivil() {
        return this.#estadoCivil;
    }

    set estadoCivilCliente(estadoCivil) {
        this.#estadoCivil = estadoCivil;
    }

    get dependentes() {
        return this.#dependentes;
    }

    set dependentesCliente(dependentes) {
        this.#dependentes = dependentes;
    }

    imprime() {
        console.log('Nome: ' + this.nome);
        console.log('CPF: ' + this.#formataCpf(this.cpf));
        console.log('Data de Nascimento: ' + this.#formataData(this.dataNascimento));
        let rendaString = String(this.rendaMensal.toFixed(2));
        console.log('Renda mensal: ' + rendaString.replace('.', ','));
        console.log('Estado civil: ' + this.estadoCivil.toUpperCase());
        console.log('Quantidade de dependentes: ' + this.dependentes);
    }

    #formataCpf(cpfPuro) {
        let cpfAtualizado = cpfPuro.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            function (regex, argumento1, argumento2, argumento3, argumento4) {
                return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
            })

        return cpfAtualizado;
    }

    #formataData(data) {
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();
        
        let dataFormat = '';

        if (dia < 10) {
            dataFormat = dataFormat + '0' + dia + '/';
        } else {
            dataFormat = dataFormat + dia + '/';
        }

        if (mes < 10) {
            dataFormat = dataFormat + '0' + mes + '/' + ano;
        } else {
            dataFormat = dataFormat + mes + '/' + ano;
        }

        return dataFormat;
    }
}
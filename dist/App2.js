"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
let carroA = new Carro('Honda', 4);
let carroB = new Carro('FIAT', 2);
let carroC = new Carro('GOL', 4);
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Rual Tal, Av Tal, nº XX', listaDeCarros);
let cliente = new Pessoa('João', 'Honda');
concessionaria.mostrarListaDeCarros().map((carro) => {
    carro['modelo'] == cliente.dizerCarroPreferido() && cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());

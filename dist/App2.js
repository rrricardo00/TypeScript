"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Concessionaria_1 = require("./Concessionaria");
const Pessoa_1 = require("./Pessoa");
let carroA = new Carro_1.Carro('Honda', 4);
let carroB = new Carro_1.Carro('FIAT', 2);
let carroC = new Carro_1.Carro('GOL', 4);
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.Concessionaria('Rual Tal, Av Tal, nº XX', listaDeCarros);
let cliente = new Pessoa_1.Pessoa('João', 'Honda');
concessionaria.mostrarListaDeCarros().map((carro) => {
    carro['modelo'] == cliente.dizerCarroPreferido() && cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());

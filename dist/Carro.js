"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    constructor(modelo, numeroDePortas) {
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
}
exports.Carro = Carro;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor() {
        this.modelo = '';
        this.velocidade = 0;
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
exports.Veiculo = Veiculo;

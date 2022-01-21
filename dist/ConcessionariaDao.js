"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = require("./Concessionaria");
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
    }
    inserir(object) {
        console.log('insert');
        return true;
    }
    atualizar(object) {
        console.log('update');
        return true;
    }
    remover(id) {
        console.log('delete');
        return new Concessionaria_1.Concessionaria('', []);
    }
    selecionar(id) {
        console.log('get');
        return new Concessionaria_1.Concessionaria('', []);
    }
    selecionarTodos() {
        console.log('getAll');
        return [new Concessionaria_1.Concessionaria('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;

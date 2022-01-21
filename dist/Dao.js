"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
    }
    inserir(object) {
        console.log('post');
        return true;
    }
    atualizar(object) {
        console.log('put');
        return true;
    }
    remover(id) {
        console.log('delete');
        return Object();
    }
    selecionar(id) {
        console.log('get');
        return Object();
    }
    selecionarTodos() {
        console.log('getAll');
        return [Object()];
    }
}
exports.Dao = Dao;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ConcessionariaDao } from "./ConcessionariaDao"
const Concessionaria_1 = require("./Concessionaria");
const Dao_1 = require("./Dao");
// let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria_1.Concessionaria('', []);
let dao = new Dao_1.Dao();
dao.inserir(concessionaria);

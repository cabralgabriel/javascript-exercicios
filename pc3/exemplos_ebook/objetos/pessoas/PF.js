// Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais

const Pessoa = require('./Pessoa');

class PF extends Pessoa {

    #cpf;

    setCPF(cpf) {
        if (cpf) {
            this.#cpf = cpf;
            return true;
        } 
        else {
            return false;
        }
    }

    getCPF() {
        return this.#cpf;
    }
}

module.exports = PF;
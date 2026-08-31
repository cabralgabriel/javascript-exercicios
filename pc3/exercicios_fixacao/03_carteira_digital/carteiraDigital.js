class CarteiraDigital {

    #titular
    #saldo

    definirTitular(nome){
        if (nome){
            this.#titular = nome;
            return true;
        }
        else{
            return false;
        }
    }

    consultarTitular(){
        return this.#titular;
    }

    depositar(valor){
        // caso titular nao tenha saldo disponivel, inicia zerado
        if (!this.#saldo){
            this.#saldo = 0;
        }
        this.#saldo += valor;
        return true;
    }

    sacar(valor){
        // caso titular tenha saldo insuficiente, retorna false
        if (this.#saldo > 0 && this.#saldo >= valor){
            this.#saldo -= valor;
            return true;
        }
        else{
            return false;
        }
    }

    consultarSaldo(){
        return this.#saldo;
    }

    exibirInformacoes(){
        return [this.#titular,this.#saldo];
    }
}

module.exports = CarteiraDigital;
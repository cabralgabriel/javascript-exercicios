
const Animal = require('./Animal');

class Cliente {

    #nome;
    #telefone;
    #animais = [];

    addAnimal(animal){
        if(animal instanceof Animal){
            this.#animais.push(animal);
            animal.addCliente(this);
            return true;
        }
        else{
            return false;
        }
    }

    getAnimal(){
        return this.#animais;
    }

    setTelefone(telefone){
        if(telefone){
            this.#telefone = telefone;
            return true;
        }
        else{
            return false;
        }
    }

    getTelefone(){
        return this.#telefone;
    }

    setNome(nome){
        if(nome){
            this.#nome = nome;
            return true;
        }
        else{
            return false;
        }
    }

    getNome(){
        return this.#nome;
    }

}

module.exports = Cliente;

const Animal = require('./Animal');

class Veterinario {

    #nome;
    #crmv;
    #animais = [];

    addAnimais(animal){
        if (animal instanceof Animal){
            this.#animais.push(animal);
            animal.addVeterinario(this);
            return true;
        }
        else{
            return false;
        }
    }

    getAnimais(){
        return this.#animais;
    }

    setCrmv(){
        if (crmv){
            this.#crmv = crmv;
            return true;
        }
        else{
            return false;
        }
    }

    getCrmv(){
        return this.#crmv;
    }

    setNome(nome){
        if (nome){
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

module.exports = Veterinario;
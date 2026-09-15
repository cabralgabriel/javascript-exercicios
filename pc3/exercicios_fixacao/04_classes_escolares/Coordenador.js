const Professor = require('./Professor');

class Coordenador extends Professor{

    #setor;

    setSetor(setor){
        if(setor){
            this.#setor = setor;
            return true;
        }
        return false;
    }

    getSetor(){
        return this.#setor;
    }
}

module.exports = Coordenador;
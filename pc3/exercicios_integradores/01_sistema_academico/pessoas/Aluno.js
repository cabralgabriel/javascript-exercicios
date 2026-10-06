const Pessoa = require('./Pessoa');

class Aluno extends Pessoa{

    #matricula;

    setMatricula(matricula){
        if(util.validarMatricula(matricula)){
            this.#matricula = matricula;
            return true;
        }
        return false;
    }

    getMatricula(){
        return this.#matricula;
    }
}

module.exports = Aluno;
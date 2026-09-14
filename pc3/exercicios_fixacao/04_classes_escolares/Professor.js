
const Pessoa = require('./Pessoa');

class Professor extends Pessoa{

    #disciplina;

    setDisciplina(disciplina){
        if (disciplina){
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }

    getDisciplina(){
        return this.#disciplina;
    }
}

module.exports = Professor;
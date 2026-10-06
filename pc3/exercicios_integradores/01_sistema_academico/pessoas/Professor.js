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

    setEmail(email) {
        if (email.endsWith('.edu.br')) {
            return super.setEmail(email);
        }
        return false;
    }

    getDisciplina(){
        return this.#disciplina;
    }
}

module.exports = Professor;
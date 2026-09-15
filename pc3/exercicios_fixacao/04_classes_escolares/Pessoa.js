class Pessoa{

    #nome;
    #email;

    setNome(nome){
        if(nome){
            if(nome !== ''){
                this.#nome = nome;
                return true;
            }
        }
        return false;
    }

    getNome(){
        return this.#nome;
    }

    setEmail(email){
        if(email){
            if(email !== ''){
                if(email.includes("@")){
                    this.#email = email;
                    return true;
                }
            }
        }
        return false;
    }

    getEmail(){
        return this.#email;
    }
}


module.exports = Pessoa;



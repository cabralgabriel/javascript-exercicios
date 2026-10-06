
function validarEmail(email){
    if(email){
        if(email !== ''){
            if(email.includes("@") && 
              (email.endsWith('.com') || email.endsWith('.edu.br'))){
                this.#email = email;
                return true;
            }
        }
    }
    else{
        return false;
    }
}

function validarMatricula(matricula){
    if (matricula){
        if(matricula !== '' && matricula.length >= 4){
            return true;
        }
    }
    else{
        return false;
    }
}

function validarCPF(cpf){
    if (cpf){
        if (cpf.length == 11){
            return true;
        }
    }
    else{
        return false;
    }
}

module.exports = {validarEmail, validarMatricula, validarCPF}
import Pessoa from './Pessoa.js';

export default class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj) {       
        if (cnpj && (cnpj.length === 14 || cnpj.length === 18)) {
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (razaoSocial) {
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}
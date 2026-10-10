import PJ from '../pessoas/PJ.mjs';

// classe IEclss
export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }
}

// função fábrica IEfunc
export function IEfunc() {
    let dados = {
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };

    function setNumero(numero) {
        if (numero) {
            dados.numero = numero;
            return true;
        } else {
            return false;
        }
    }

    function getNumero() {
        return dados.numero;
    }

    function setEstado(estado) {
        if (estado) {
            dados.estado = estado;
            return true;
        } else {
            return false;
        }
    }

    function getEstado() {
        return dados.estado;
    }

    function setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            dados.dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    function getDataRegistro() {
        return dados.dataRegistro;
    }

    function setPJ(pj) {
        if (pj instanceof PJ) {
            dados.pj = pj;
            return true;
        } else {
            return false;
        }
    }

    function getPJ() {
        return dados.pj;
    }

    return {
        setNumero,
        getNumero,
        setEstado,
        getEstado,
        setDataRegistro,
        getDataRegistro,
        setPJ,
        getPJ
    };
}

// bjeto literal IEjson 
export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (numero) {
            this.numero = numero;
            return true;
        } else {
            return false;
        }
    },

    getNumero() {
        return this.numero;
    },

    setEstado(estado) {
        if (estado) {
            this.estado = estado;
            return true;
        } else {
            return false;
        }
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.pj = pj;
            return true;
        } else {
            return false;
        }
    },

    getPJ() {
        return this.pj;
    }
};
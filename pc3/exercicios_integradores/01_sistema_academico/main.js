const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

function mostrarDados(obj) {
    console.log(`Nome: ${obj.getNome()}`);
    console.log(`E-mail: ${obj.getEmail()}`);
    
    if (obj.getMatricula) {
        console.log(`Matrícula: ${obj.getMatricula()}`);
    }
    
    if (obj.getDisciplina) {
        console.log(`Disciplina: ${obj.getDisciplina()}`);
    }
    
    console.log("---------------------------------");
}

const pessoa1 = new Pessoa("Ana Silva", "ana@gmail.com");
const pessoa2 = new Pessoa("Carlos", "carlos@hotmail.net");

const aluno1 = new Aluno("João Souza", "joao@escola.edu.br", "2023001");
const aluno2 = new Aluno("Maria", "maria.com", "12");

const prof1 = new Professor("Roberto", "roberto@uni.edu.br", "Matemática");
const prof2 = new Professor("Fernanda", "fernanda@gmail.com", "História");

mostrarDados(pessoa1);
mostrarDados(pessoa2);
mostrarDados(aluno1);
mostrarDados(aluno2);
mostrarDados(prof1);
mostrarDados(prof2);
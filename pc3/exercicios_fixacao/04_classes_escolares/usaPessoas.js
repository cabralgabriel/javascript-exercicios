const Pessoa = require('./Pessoa');
const Aluno = require('./Aluno');

// Testa instanciação de pessoas válidas e inválidas
const p = new Pessoa();

console.log(p.setNome("João Silva"));
console.log(p.setEmail("joao@gmail.com"));

const p2 = new Pessoa();

console.log(p.setNome(""));
console.log(p.setEmail(""));

// Testa instanciação de alunos
const a = new Aluno();

console.log(a.setNome("Maria"));
console.log(a.setEmail("maria@gmail.com"));
console.log(a.setMatricula("2025001"));

console.log(a.setNome("Pedro"));
console.log(a.setEmail(""));
console.log(a.setMatricula(""));

// Teste instanciação de professor
const prof = new Professor();

console.log(prof.setNome("Carlos"));
console.log(prof.setEmail("carlos@email.com"));
console.log(prof.setMatricula("Programação Web"));

console.log(prof.setNome("Ana"));
console.log(prof.setEmail("ana@email.com"));
console.log(prof.setMatricula(""));
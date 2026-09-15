const Pessoa = require('./Pessoa');
const Aluno = require('./Aluno');
const Professor = require('./Professor');
const Coordenador = require('./Coordenador');

// Testa instanciação de pessoas válidas e inválidas
const p = new Pessoa();
console.log(p.setNome("João Silva"));
console.log(p.setEmail("joao@gmail.com"));

const p2 = new Pessoa();
console.log(p2.setNome(""));
console.log(p2.setEmail(""));

const p3 = new Pessoa();
console.log(p3.setNome("Aluno"));
console.log(p3.setEmail("alunoemail.com"))

// Testa instanciação de alunos
const a = new Aluno();
console.log(a.setNome("Maria"));
console.log(a.setEmail("maria@gmail.com"));
console.log(a.setMatricula("2025001"));

const a2 = new Aluno();
console.log(a2.setNome("Pedro"));
console.log(a2.setEmail(""));
console.log(a2.setMatricula(""));

// Teste instanciação de professor
const prof = new Professor();
console.log(prof.setNome("Carlos"));
console.log(prof.setEmail("carlos@email.com"));
console.log(prof.setDisciplina("Programação Web"));

const prof2 = new Professor();
console.log(prof2.setNome("Ana"));
console.log(prof2.setEmail("ana@email.com"));
console.log(prof2.setDisciplina(""));

// Teste instanciação de coordenador
const coord = new Coordenador();
console.log(coord.setNome("Mateus"));
console.log(coord.setEmail("mateus@email.com"));
console.log(coord.setSetor("Computação"));
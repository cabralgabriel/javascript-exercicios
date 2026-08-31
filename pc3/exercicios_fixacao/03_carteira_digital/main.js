const CarteiraDigital = require('./carteiraDigital');

const carteira = new CarteiraDigital();

resposta = carteira.definirTitular('João Silva');
console.log(resposta);

resposta = carteira.depositar(200);
console.log(resposta);

console.log(carteira.consultarSaldo());

resposta = carteira.sacar(50);
console.log(resposta);

console.log(carteira.consultarSaldo());

carteira.sacar(200);
resposta = console.log(resposta);

console.log(carteira.exibirInformacoes()[0], carteira.exibirInformacoes()[1]);
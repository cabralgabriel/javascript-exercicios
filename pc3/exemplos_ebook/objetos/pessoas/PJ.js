// Arquivo criado em projeto no www.stackblitz.com denominado PJ.js (Pessoa Jurídica)
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança e sobrescrita de métodos,
// bem como encapsulamento adicionados de condicionais e operadores de comparação

const Pessoa = require('./Pessoa');

class PJ extends Pessoa {

   #cnpj;

   setCNPJ(cnpj) {

     /*
      Operadores de comparação:
      <  : menor que
      >  : maior que
      <= : menor ou igual que
      >= : maior ou igual que
     */

     if (cnpj) {

       if (cnpj.length < 18) {
         return false;
       }

       this.#cnpj = cnpj;
       return true;

     } else {

       return false;

     }

   }

   getCNPJ() {
     return this.#cnpj;
   }

   // Sobrescrita do método setEmail()
   setEmail(email) {

     /*
      Operadores de comparação:
      ==  : igualdade frouxa
      === : igualdade estrita
      !=  : diferença frouxa
      !== : diferença estrita
     */

     if (email !== '') {

       if (email.includes('@')) {

         super.setEmail(email);

         return true;

       }

     } else {

       return false;

     }

   }

 }

 module.exports = PJ;
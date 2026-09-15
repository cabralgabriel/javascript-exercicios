# Questões Teóricas

## O que é encapsulamento?
Consiste em esconder os atributos de uma classe, disponibilizando métodos públicos que realizem verificações internamente. 

## Qual a vantagem de utilizar atributos privados?
Proteger os dados por meio do uso do conceito de encapsulamento, realizando validações antes de atribuir um valor a um atributo efetivamente.

## Qual a diferença entre `getNome()` e `setNome()`
O método get normalmente retorna o atributo do objeto instanciado, enquanto set, realiza validações internas, por meio do encapsulamento, antes de atribuir o valor ao atributo.

## O que faz a palavra-chave `extends`
É a palavra reservada que indica que uma classe X herda de Y. Assim, X será uma classe especializada da superclasse Y;

## Uma classe filha pode utilizar métodos da classe pai?
Sim, pois normalmente métodos são definidos como públicos, sendo herdados. Enquanto aqueles elementos que foram declarados como privados, não são herdados.

## Por que utilizar validações dentro dos métodos de uma classe?
Pois garantem que os dados que utilizaremos dos atributos foram tratados, e estão numa forma desejável para serem utilizados.

## Qual a diferença entre herança e reutilização de código por cópia?
A herança diminui as redundâncias, torna o código mais modular, facilita a manutenção.
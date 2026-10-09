# Questões Teóricas

## Qual a vantagem de consultar diretamente a API antes de modificar a classe?
Porque dessa maneira podemos analisar a estrutura do JSON retornado. Assim, é possível identificar os campos disponíveis e planejar os atributos da maneira mais útil antes de alterar o código da classe.

## Por que os novos dados devem ser armazenados em atributos privados?
Para que esses dados sejam acessíveis apenas por métodos com o devido encapsulamento.

## Qual a finalidade dos métodos get adicionados à classe?
Por meio desses métodos podemos realizar um encapsulamento adequado, realizando o tratamento dos dados recebidos pela API.

## Por que não devemos acessar diretamente os atributos retornados pela API fora de setCep()?
Centralizando o acesso dentro do método, mantemos o encapsulamento e evitamos quebras no restante do código, caso a API mude no futuro.

## Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?
A propriedade da API é a chave definida pelo serviço no retorno dos dados. O atributo da classe é a variável que criamos para armazenar essa informação.

## Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?
Porque a classe pode seguir um padrão adotado pelo desenvolvedor em sua aplicação e não necessariamente o do ViaCEP.

## O que aconteceria se a API adicionasse novos campos no futuro?
O método setCep() continuaria funcionando, porém o objeto retornado pela API possuíria campos que não seriam utilizados

## Por que o tratamento com try/catch deve continuar funcionando mesmo após a inclusão de novos atributos?
Porque os novos atributos não são efetivamente utilizados e trabalhados pelo método, eles apenas ficam armazenados no objeto.
# Questões Teóricas

## Qual a vantagem de fazer PJ herdar da classe Pessoa?
Permite reaproveitar os atributos e métodos já implementados em Pessoa, evitando a repetição de código, deixando a estrutura mais organizada.

## Por que não devemos copiar para PJ os métodos já implementados em Pessoa?
Pois isso gera redundância, o que dificulta a manutenção do código. Caso seja necessário alguma alteração no futuro, precisaríamos atualizar o código em mais de um arquivo.

## Qual a finalidade do operador instanceof no método setPJ()?
Garante em tempo de execução que o objeto recebido é de fato uma instância da classe PJ, evitando que objetos que não são dessa classe, sejam associados.

## Qual a diferença entre if (pj) e if (pj instanceof PJ)?
O if (pj) apenas verifica se a variável possui algum valor válido. Enquanto o if (pj instanceof PJ) verifica se o objeto pj é uma instância da classe PJ.

## Qual a diferença entre a classe IEclss e a função fábrica IEfunc()?
A classe IEclss exige o operador new para instanciar objetos. A função fábrica IEfunc() é uma função convencional que constrói e retorna um novo objeto sem a necessidade do new.

## Como a função fábrica protege seus dados internos?
Mantém os dados no escopo da função e retorna um objeto contendo os métodos públicos.

## Qual a diferença entre o objeto literal IEjson e um documento JSON?
O objeto literal é uma estrutura da linguagem JavaScript que contém propriedades e métodos. O JSON é apenas um formato de dados semiestruturados.

## Qual a diferença entre exportação padrão e exportação nomeada?
A exportação padrão disponibiliza o recurso principal do arquivo e é importada sem chaves. A exportação nomeada permite disponibilizar vários recursos de um mesmo arquivo, exigindo o uso de chaves na importação.

## Por que IEclss utiliza new, enquanto IEfunc() não utiliza?
Porque IEclss é uma classe construtora que precisa do operador new para instanciar o objeto. A IEfunc() é apenas uma função que já retorna diretamente um objeto pronto.

## Qual a vantagem de organizar as classes e estruturas em arquivos separados?
Melhora a organização do projeto e facilita a  manutenção do código, além de permitir que cada módulo seja reutilizado em diferentes partes da aplicação.

## Como o relacionamento entre IE e PJ é representado no código?
Por meio de associação de objetos, onde um atributo interno de IE armazena uma referência para uma instância da classe PJ.

## Por que instanceof Date pode ser utilizado mesmo sem termos criado a classe Date?
Porque Date é uma classe nativa do próprio JavaScript, disponível globalmente no ambiente.
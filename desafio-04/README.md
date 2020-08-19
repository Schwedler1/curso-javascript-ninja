# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
?var isTruthy = 'isTruthy'
undefined
isTruthy
"isTruthy"
function isTruthy() {
    return verdadeiro;
}
undefined
isTruthy ? true : false
true

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?

/*function isTruthy() {
    return 'falsy';
}
undefined
isTruthy()
"falsy"
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/var carro = { marca: 'chevrolet' , modelo: 'celta' , placa: 'hcc' , ano: 2004 , cor: 'branco' , quantasportas: 4 , assentos: 5 , quantidadedepessoas: 0 }; 
undefined
?
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/carro.mudacor = 'preto'
"preto"
?

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/function obtercor(mudacor = 'preto') {
... return mudacor;
... }
undefined
> obtercor()
'preto'
?

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/function obtermodelo( modelo = 'celta') {
... return modelo;
... }
undefined
> obtermodelo()
'celta'
?

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/ function obtermarca(marca = 'chevrolet') {
... return marca;
... }
undefined
> obtermarca()
'chevrolet'
>          
?

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/function MarcaeModelo( marca = 'chevrolet' , modelo = 'celta') {
... return 'esse carro é um [chevrolet] , [celta]';
... }
undefined
> MarcaeModelo()
'esse carro é um [chevrolet] , [celta]'
?

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.carro.quantidadedepessoas = 1

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"  carro.quantidadedepessoas = 'ja temos 1 pessoas no carro!';
'ja temos 1 pessoas no carro!'
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/'ja temos 5 pessoas no carro!'
> carro.quantidadedepessoas = 'o carro ja está lotado!';
'o carro ja está lotado!'
> carro.quantidadedepessoas = 'Só cabem mais [1] pessoa!';
'Só cabem mais [1] pessoa!'
> carro.quantidadedepessoasnocarro = 6;
6
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/ cor: 'preto',
?

// Mude a cor do carro para vermelho.
? carro.cor = 'vermelho';
'vermelho'

// E agora, qual a cor do carro?
?carro.cor
'vermelho'

// Mude a cor do carro para verde musgo.
?
carro.cor = 'verde musgo';
'verde musgo'
// E agora, qual a cor do carro?
?
 carro.cor
'verde musgo'
// Qual a marca e modelo do carro?
? carro.marca
'chevrolet'
> carro.modelo
'celta'

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```

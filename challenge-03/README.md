# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
?

/*var pessoa;
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
?var pessoa = { nome: 'Tiago', sobrenome: 'Rodrigues', sexo: 'masculino', idade: 22, altura: 1.69, peso: 57 };
undefined
> pessoa
{
  nome: 'Tiago',
  sobrenome: 'Rodrigues',
  sexo: 'masculino',
  idade: 22,
  altura: 1.69,
  peso: 57
}
> pessoa.andando = 'false'
'false'
> pessoa.caminhouQuantosMetros = 'zero'
'zero'
> pessoa
{
  nome: 'Tiago',
  sobrenome: 'Rodrigues',
  sexo: 'masculino',
  idade: 22,
  altura: 1.69,
  peso: 57,
  andando: 'false',
  caminhouQuantosMetros: 'zero'
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/> pessoa.idade = function (pessoa,idade) {
... return pessoa,idade = 22 + 1;
... }
[Function]
> pessoa.idade()
23
?

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/ nome: 'Tiago',
  sobrenome: 'Rodrigues',
  sexo: 'masculino',
  idade: [Function],
  altura: 1.69,
  peso: 57,
  andando: 'true',
  caminhouQuantosMetros: 200,
  andandometros: 200
?

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/ nome: 'Tiago',
  sobrenome: 'Rodrigues',
  sexo: 'masculino',
  idade: [Function],
  altura: 1.69,
  peso: 57,
  andando: 'false',
  caminhouQuantosMetros: 200,
  andandometros: 200,
  parar: [Function]

?

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
? pessoa.nomecompleto = function () {
... return 'olá meu nome é [tiago] , [Rodrigues]';
... }

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/pessoa.mostraridade = 'olá eu tenho [22] anos';
'olá eu tenho [22] anos'
?

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/pessoa.mostrarpeso = 'eu peso [56] kg';
'eu peso [56] kg'
?

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/ pessoa.mostraraltura = 'minha altura é [1.69]m';
'minha altura é [1.69]m'
?

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/ pessoa.nomecompleto()
'olá meu nome é [tiago] , [Rodrigues]'//tiago rodrigues
?

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/ pessoa.idade()
23// 23 anos
?

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/ pessoa.peso
57// 57kg
?

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/ pessoa.altura
1.69// 1.69m
?

/*
Faça a `pessoa` fazer 3 aniversários.
*/ pessoa.aniversario()
26// idade somando  + 3 anos
?

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/ pessoa.aniversario()
26// 26 anos
?

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/pessoa.andandometros = 200 * 3;
600
?

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/  //false
?

/*
Se a pessoa ainda está andando, faça-a parar.
*/
?

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/ pessoa.andandometros = 200 * 3;
600// andou 600 m
?

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
?

// Agora, apresente-se ;)
? pessoa.apresentação = 'olá eu sou o [Tiago Rodrigues], tenho [23] anos, [1.69] altura, meu peso é [57kg] e , só hoje eu ja caminhei [600] metros';
'olá eu sou o [Tiago Rodrigues], tenho [23] anos, [1.69] altura, meu peso é [57kg] e , só hoje eu ja caminhei [600] metros'
```

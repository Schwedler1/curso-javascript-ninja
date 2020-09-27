/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/var sum;
undefined
function calculSum( x = 20 , y = 20) {
    return x + y;
}
undefined
calculSum()
40
// ?

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/alculSum() + 10 + 5;
55
//"A soma de 10 e 5 é igual a 15".
undefined
// ?

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/var consoc = 'O nome da funcão que faz a soma é calcuSum';
undefined
function calcuSum(resultado) {
    return consoc;
}
undefined
calcuSum()
"O nome da funcão que faz a soma é calcuSum"
// ?

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/ar name = 'Tiago';
undefined
function showName(nome) {
    return name;
}
undefined
showName()
"Tiago"
// ?

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/function varshowname(nome) {
    return varShowName;
}
undefined
varshowname()
"Tiago"
// ?

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/var frase = 'A função varshowname retorna Tiago';
undefined
function varshowname(nome) {
    console.log(frase);
}
undefined
varshowname()
VM3382:2 A função varshowname retorna Tiago
undefined
// ?

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/function calculadora( adição) {
    function paramentro( x = 20 , y = 20) {
         return x + y;
    }
}
undefined
var operations = ' "Resultado da operação: 20 + 20 = 40"'
undefined
 function calculadora(resultado) {
      console.log(operations);
 }
undefined
calculadora()
VM3974:2  "Resultado da operação: 20 + 20 = 40"
undefined
// ?

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/var soma;
undefined
function soma (adição) {
}
undefined
// ?

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/function sum ( x = 30 , y = 20 ) {
    return x + y;
}
undefined
sum()
50
// ?

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
// ?var subtração;

var multiplicação;

var division;

undefined
var operadores = ' subtração: - , multiplicação: * , division: / ';
undefined
operadores
" subtração: - , multiplicação: * , division: / "
function calculator ( operador) {
   console.log(operadores);
}
undefined
calculator()
VM6077:2  subtração: - , multiplicação: * , division: / 
undefined
/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/function subtração( x = 80 , y = 40 ) {
    return x - y;
}
undefined
subtração()
40

function multiplicação( x = 3 ,  y = 2) {
    return x * y;
}
undefined
multiplicação()
6

function divisão( x = 15 , y = 5) {
    return x / y;
}
undefined

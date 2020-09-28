/*
Crie um array com 5 items (tipos variados).
*/
// ? arr = [ null , 'nome' , true , 22 , 'azul'];
undefined
arr
(5) [null, "nome", true, 22, "azul"]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// function addItem(adc) {
    return arr;
}
undefined
addItem()
(5) [null, "nome", true, 22, "azul"]

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?arr[0]
null
arr[1]
"nome"
arr[2]
true
arr[3]
22a

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?arr[1]// "o segundo elenento do segundo arrey é [nome]"
"nome"

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?arr.length//" o primeiro array tem itens [ quantidades 5 itens]
5

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?segundoarr.length// " O segundo array tem itens  [ quantidade de 2 itens]";
2

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ? while(num <= 20) {
... num % 2 === 0 ? console.log(num):'';
... num ++;
... }
10
12
14
16
18
20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?ar num = 0;
undefined
while(num <= 20) {
    (num ++) % 2 === 0 ? console.log(num):'';
}
11
VM2504:2 13
VM2504:2 15
VM2504:2 17
VM2504:2 19
VM2504:2 21

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?

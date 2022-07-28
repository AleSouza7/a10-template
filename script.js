/*aula 

const pets = ["gato","cão","pato"]
const numero = ["20","30","50"]
const arraymisto = [10,"ola",true]
const umItem = [1]
const vazio = []

console.log(pets.length);
console.log(pets[2]);
console.log(arraymisto.includes(10))
console.log(arraymisto.includes("ola"))
console.log(arraymisto.includes(true))
console.log(umItem)
console.log(umItem.length)

//parte 3

const copiaPets = pets
console.log(copiaPets,pets)
copiaPets.push("rato")
console.log(copiaPets,pets)


const copiaPets = pets.slice()
console.log(copiaPets,pets)
copiaPets.push("rato")
copiaPets.splice(2.2)
console.log(copiaPets,pets)
console.log(pets.sort())*/

const numero = [204,20,40,55];//1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica.
console.log(numero.sort());
console.log(numero.reverse());
console.log(numero)

//abaixo os códigos da professora
// parte 1 criação de arrays
​
const pets = ["gato", "cão", "pato"];//Array1
//    indices      0      1      2    
const numeros=[4,9,7, -7, 10, 56, "b", "a"];//Array2
const arrayMisto = [10,"Olá", true];//Array3
const unicoItem = [10];//Array4
const vazio=[]//Array5
​
// //parte 2 observação
​
console.log("TAMANHO DO ARRAY",pets.length);//3
console.log("ACESSA O ITEM DE INDICE 3",pets[3]);//undefined
console.log("ACESSA O ITEM DE INDICE 2",pets[2]);//pato
​
// Vericica se o item existe no array 
console.log(arrayMisto.includes(10));
console.log(arrayMisto.includes("Olá"));
console.log(arrayMisto.includes(true));
​
//Observando item único do array e seu tamanho
console.log(unicoItem);
console.log(unicoItem.length);
​
//parte 3 
​
// CÓPIA DE ARRAYS FEITO DA MANEIRA ERRADA
// Aponta para o espaço em memoria do array original
​
// const copiaPets = pets
// console.log(copiaPets, pets);
// copiaPets.push("rato")
// console.log(copiaPets, pets);
​
// CÓPIA DE ARRAYS FEITO DA MANEIRA CORRETA
// Cria um novo array sem vínculos com o original, mas com a copia dos valores.
​
const copiaPets = pets.slice()
console.log(copiaPets, pets);
//Adiciona um novo item no fim da lista
copiaPets.push("rato")
console.log(copiaPets, pets);
//retira uma quantidade de itens a partir de um índice específico.
copiaPets.splice(2,2)
//    splice(índice, quantidade) 
console.log(copiaPets, pets);
console.log( pets);
//organiza as strings de maneira crescente
console.log(pets.sort());
console.log(pets);
//organiza os números de maneira crescente no caso de 0 à 9 ( a partir do 10 a organização segue o padrão 0,1,10,2,20,3,4,5,56,6,... )
console.log(numeros.sort());
console.log(numeros);
// primeiro números depois strings e depois boleanos
console.log(arrayMisto.sort());




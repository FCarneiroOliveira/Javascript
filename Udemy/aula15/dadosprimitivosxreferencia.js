// primitivos(imutáveis): string, number,boolean,undefined,null,bigint,symbol
let nome = 'Diego';
nome[0] = 'R'; // não muda, pois os tipos primitivos são imutáveis, não tem como mudar um indice do valot!!!!
console.log(nome)

//Referência(mutável): array,object,function
let a  = [1,2,3,4];
let b = a; // b vai receber o mesmo lugar na memória que a, portanto serão referencias, se mudar o a também muda o b
let c = [...a] // c recebe os valores de a  e aponta para outro espaço na memória.
a[0] = 5;
console.log(a,b)
console.log(c)

const pessoa = {
    nome: 'Luiz',
    idade: 26
};
const pessoa2 = pessoa;
console.log(pessoa, pessoa2)
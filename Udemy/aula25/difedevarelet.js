// let tem escopo de blovo {....bloco}
// var só tem escopo de função
// não pode tenta usar o chamar a várivavel sem ter declarado ela antes do chamado

const verdadeiro = true;
// let nome = 'Felipe'
// var nome2 = 'Carneiro'
// var nome2 = 'Otávio' //redeclarada

// if(verdadeiro){
//     let nome = 'Luiz' //Não é a mesma váriavel "nome" que está fora do escopo da condição!! Aqui é criada outra váriavel ;)
//     var  nome2 = 'Ronaldo'
//     console.log(nome,nome2)

//     if(verdadeiro){ // a váriavel é buscada primeiramente dentro do bloco e depois fora.
//         var nome2 = 'Felipe' //redeclarada
//         let nome = 'João'
//         console.log(nome,nome2)
//     }
// }
// console.log(nome,nome2)

// var sobreNome = 'Carneiro'

// function falaOi(){
//     //var nome = 'Felipe'
//     console.log(sobreNome) // Mas as váriaveis que estão fora da função podem ser acessadas pela função
//     if (verdadeiro){
//         let nome = 'Felipe'
//         console.log(sobreNome)
//     }

// }
// //console.log(nome) // váriaveis dentro de funções são protegidas não podem ser acessadas por fora
// falaOi();
// existe o Hoisting( elevação) de var e  funções criadas foras de variáveis
console.log(sobrenome)

var sobrenome = 'Carneiro'
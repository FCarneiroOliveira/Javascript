// const pessoa1 = new Object();
// pessoa1.nome = 'Felipe'
// pessoa1.sobrenome = 'Carneiro'
// pessoa1.idade = 20
// pessoa1.falaNome = function(){
//     return (`${this.nome} está falando seu nome`)
// }
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade - 1
// }
// pessoa1.falaNome()
// console.log(pessoa1.getDataNascimento())
// delete pessoa1.nome
// console.log(pessoa1)

// for ( let chave in pessoa1){
//     console.log(pessoa1[chave])
// }

// const pessoa2 = {
//     nome:'Maria',
//     sobrenome:'Frota'
// }

// ---------------------------------//----------------------------

// Factory functions / Constructor functions

// function criaPessoa(nome,sobrenome){ // Factory Function
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return ` ${this.nome}`
//         }
//     };
// }

// const p1 = criaPessoa('Felipe','Carneiro')
// console.log(p1.nomeCompleto)

function Pessoa(nome,sobrenome){ // Constructor Function
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this) // vai travar qualquer objeto criado por essa função -- PERIGOSO!!
}
// new - cria um novo objeto e atrela a palavra this ao objeto 

// p1 = aponta (edereço da Memória = 212315548446541) aponta pro valor
const p1 = new Pessoa('Felipe','Carneiro')
Object.freeze(p1) // Trava o objeto
p1.nome = 'João' // alterando o valor no endereço da memória
console.log(p1)
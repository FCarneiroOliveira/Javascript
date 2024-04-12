const nome = 'Felipe'
const idade = 21

const fala = () =>{
    console.log(nome + ' fala oi')
}

// // module.exports.nome = nome // exportando como arquivo CommonJS
// // module.exports.fala = fala

// exports.Nome = nome // mesmo que o de cima
// exports.idade = idade
// exports.fala = fala 
// this.qualquerCoisa = 'O que eu quiser exportar' // também adiciona ao objeto do exports, o this aponta para ele

module.exports = { // exportando vários ao mesmo tempo
    nome, idade, fala
}

// // const _nome = nome  //exportando como arquivo ES modulo
// // export { _nome as nome } 

// ---------------------//------------------------//---------------------

// Agora com Classes

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

exports.Pessoa = Pessoa
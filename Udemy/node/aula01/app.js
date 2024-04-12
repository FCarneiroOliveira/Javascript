// import mod1 from './mod1.js'; // importando todo o objeto  como ES module

// const mod1 = require('./mod1.js')  // importando todo o objeto como CommonJS

// const fala = require('./mod1.js').fala // importando só a função fala


// import { Nome, idade, fala } from './mod1.js';  // Associação via desetruturação(destructuring) com ES module

// const {nome, idade, fala} =  require('./mod1.js')  // Associação via desetruturação(destructuring)

console.log(nome)
console.log(idade + ' anos')
fala()

//----------------------------//---------------------------//--------------

// Com a classe
// const path = require('path') // modulo do Node

// const axios = require('axios')

// const {Pessoa} = require('./mod1')

// const p1 = new Pessoa('Felipe',21)
// console.log(p1)

// // usando o axios do npm
// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json') // retorna uma promise
// .then(response => console.log(response.data))
// .catch(e => console.log(e))
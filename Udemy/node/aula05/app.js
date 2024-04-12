const path = require('path')
const caminhoArquivo = path.resolve(__dirname,'teste.json')
const escreve = require('./modules/escreve')
const le = require('./modules/le')
const { copyFileSync } = require('fs')
// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Felipe'},
//     {nome: null},
//     {nome: 123}
// ]
// const json = JSON.stringify(pessoas,'',2)

// escreve(caminhoArquivo,json)

async function leArquivo(caminho){
    const dados = await le(caminho)
    redenrizarDados(dados)
}

function redenrizarDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(valor => console.log(valor.nome));
}
leArquivo(caminhoArquivo)

// const dadosArquivos = leArquivo(caminhoArquivo)
// .then(dados => console.log(dados))
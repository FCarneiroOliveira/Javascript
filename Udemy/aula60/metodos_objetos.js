/*
Object.values - Retorna os valores do objeto
Object.entries -  retorna chave e valor em arrays
Object.assign(des,any) - cria outro objeto apartir de outro objeto
Object.getOwnPropertyDescriptor(o,'prop') - exibi as propriedades de um objeto
...(spread) - também cria outro objeto apartir de outro objeto já criado

// Já vimos

Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
 */

const produto = {/* Objetos também são passados como referência quando colocados em outras variaveis */
    nome:'Caneca',
    preco:2
}
const p2 = {...produto, material:'cerâmica'}
const p3 = Object.assign({},produto) // faz o mesmo que o spread
const p4 = {nome: produto.nome,preco: produto.preco} // pior forma porém util se precisar pegar somente um valor de outro objeto
produto.nome = 'Caneta'
console.log(p2,produto)
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))

for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor)
}
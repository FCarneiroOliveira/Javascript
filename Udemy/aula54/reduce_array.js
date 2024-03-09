// SOme toos os números
// Retorne um array com os pares(filter)
// Retorne um array com o dobro dos valores map

const numeros =  [5,50,80,1,2,3,5,8,7,11,15,22,27]
const total = numeros.reduce((acumulador,valor,indice,array) =>{
    return acumulador += valor
},0)
console.log(total)

const pares = numeros.reduce((acumulador,valor) => {
    if(valor % 2 == 0){
        acumulador += valor
        console.log(valor)
    }
    return acumulador
},0)
console.log(pares)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Felipe',idade: 20},
    {nome: 'Maria',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome: 'Leticia',idade: 19},
    {nome: 'Rosana',idade: 32},
    {nome: 'Wallace',idade: 47}
]
const maisVelha = pessoas.reduce((acumulador,obj) => {
    if(acumulador.idade > obj.idade) return acumulador
    return obj
})
console.log(maisVelha)
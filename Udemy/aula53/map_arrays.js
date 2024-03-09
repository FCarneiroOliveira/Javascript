// Map-  Retorna um array do mesmo tamanho e muda o(s) valor(es)
//Dobre os números
const numeros =  [5,50,80,1,2,3,5,8,7,11,15,22,27]

const dobrado = numeros.map(valor => valor * 2)
console.log(dobrado)

//Para cada elemento:
// Retorne apenas uma string com nome da pessoas
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Felipe',idade: 20},
    {nome: 'Maria',idade: 23},
    {nome: 'Eduardo',idade: 55},
    {nome: 'Leticia',idade: 19},
    {nome: 'Rosana',idade: 32},
    {nome: 'Wallace',idade: 47}
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map(obj =>({idade: obj.idade}))
console.log(idades)

// const comId = pessoas.map((obj,indice) => obj.id = (indice + 1) * 1000)

const comId = pessoas.map((obj,indice) => {
    const novoObj = {...obj}
    novoObj.id = indice
    return novoObj
})
console.log(comId)



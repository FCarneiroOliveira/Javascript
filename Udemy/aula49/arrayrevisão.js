// Valor por referência

const nomes = ['Felipe','Maria','João']
// const nomes = new Array('Felipe','Maria','José')
const novo = [...nomes]

const removido = novo.pop() // remove e mantém um valor vazio / shift remove e mudas os indices sem deixar valores vázios/ unshift adiciona no começo do array

novo.push('joão','josé') 
console.log(nomes)

const fatiado = novo.slice(0,-1)
console.log(fatiado)


const string = 'Felipe Carneiro'

const lista = string.split(' ') // split divide uma string conforme o caractere passado e transforma em um array
console.log(lista)

const array = ['Felipe','Carneiro']
const nome = array.join(' ') // faz o contrário do split e tranforma um array em uma string
console.log(nome)


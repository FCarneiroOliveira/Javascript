// new Object -> Object.prototype
const objA = { // Ao criar o objeto o __proto__ já é criado
    chaveA: 'A'
    //__proto__: Object.prototype
}
const objB = { // Ao criar o objeto o __proto__ já é criado
    chaveB: 'B'
    //__proto__: Object.prototype
}
// const objC = new Object()
// objC.chaveC = 'C'
// Object.setPrototypeOf(objB,objA)
// Object.setPrototypeOf(objC,objB)
// console.log(Object.getPrototypeOf(objC))

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(desc){
    this.preco  = this.preco - (this.preco * (desc / 100))
}
Produto.prototype.aumentaPreco = function(desc){
    this.preco  = this.preco + (this.preco * (desc / 100))
}

const p1 = new Produto('Camiseta', 50)

//Literal
const p2 = {
    nome: 'Sapato',
    preco: 120
}

Object.setPrototypeOf(p2,Produto.prototype) 

p2.aumentaPreco(20)


const p3 = Object.create(Produto.prototype,{
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'M'
    },
    preco:{
        writable:true,
        configurable:true,
        enumerable:true,
        value: 15
    }

}) // setando o prototype direto na criação do obj
p3.nome = 'Caneca'

p3.aumentaPreco(10)

// p1.desconto(100)
p1.aumentaPreco(100)
console.log(p1,p2,p3)
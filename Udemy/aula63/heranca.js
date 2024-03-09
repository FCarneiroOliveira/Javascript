

function Produto(nome,preco,estoque){
    this.nome =nome
    this.preco = preco
    this.estoque = estoque
}

Produto.prototype.aumento =function(aum){
    this.preco = this.preco + (this.preco * (aum/100))
}
Produto.prototype.desconto =function(des){
    this.preco = this.preco - (this.preco * (des/100))
}

function Camiseta(nome,preco,estoque,cor){
    Produto.call(this,nome,preco,estoque)
    this.cor = cor  // Agora a Camiseta tem uma propriedade que o Produto não tem
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta // Fazendo a Camiseta ter o construtor dela e não do Produto

Camiseta.prototype.tipo = function(nome){
    if(this.nome === 'Camiseta') this.tipo = 'Praia'
}

function Caneca(nome,preco,estoque,material){
    Produto.call(this,nome,preco,estoque,material)
    this.material = material

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){ 
            if (typeof  valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camisa = new Camiseta('Camiseta',20,10,'Amarela')
const caneca = new Caneca('Caneca',15,20,'Plástico')
caneca.estoque = 'Oi'
console.log(camisa)
camisa.tipo()
console.log(camisa)

console.log(caneca)
console.log(caneca.estoque)
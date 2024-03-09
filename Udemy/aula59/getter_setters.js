function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
   
    let estoquePrivado = estoque
    Object.defineProperty(this,'estoque',{
        enumerable: true, // exibi a chave
        configurable:true, // permiti deletar ou reconfigurar a chave
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }
           estoquePrivado = valor
        }

    })
}

function criaProduto(nome){
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor
        }
    }
}
// const p1 = new Produto('Camiseta',20,10)
// p1.estoque = 'A'

const p2 = criaProduto('Camiseta')
p2.nome = 'Felipe'
console.log(p2.nome)
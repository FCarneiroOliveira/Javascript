// Objct Define Property(ies) (plural para definir várias propriedades)


function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
   
    Object.defineProperty(this,'estoque',{
        enumerable: true, // exibi a chave
        value: estoque, // exibi o valor
        writable: false, // se true permiti mudar o valor da propriedade, se false não permiti
        configurable:true // permiti deletar ou reconfigurar a chave

    })
    
    Object.defineProperty(this,'estoque',{ // reconfigurei pq o configurable está true acima
        enumerable: true, // exibi a chave
        value: estoque, // exibi o valor
        writable: true, // se true permiti mudar o valor da propriedade, se false não permiti
        configurable:false // permiti deletar ou reconfigurar a chave

    })

    Object.defineProperties(this,{
        nome: {
            enumerable: true, // exibi a chave
            value: nome, // exibi o valor
            writable: true, // se true permiti mudar o valor da propriedade, se false não permiti
            configurable:true // permiti deletar ou reconfigurar a chave
        },
        preco:{
            enumerable: true, // exibi a chave
            value: preco, // exibi o valor
            writable: true, // se true permiti mudar o valor da propriedade, se false não permiti
            configurable:true // permiti deletar ou reconfigurar a chave
        }
    })

}
const p1 = new Produto('Camiseta',20,10)
p1.estoque = 100
console.log(p1)
console.log(Object.keys(p1)) // se o enumerable for false não irá exibir a chave estoque do objeto
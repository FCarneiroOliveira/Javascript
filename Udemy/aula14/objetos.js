function criaPessoa(nome,sobrenome,idade){
    return {nome, sobrenome,idade,}
}
const pessoa = criaPessoa('Luiz','Otávio',25)
console.log(pessoa)
const pessoa1 = {
    nome: 'Miguel',
    sobrenome: 'Sousa',
    idade: 21,


    fala(){
        console.log(`${this.nome} fala oi.`)
    }
}
pessoa1.fala()
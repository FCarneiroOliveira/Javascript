class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar(){
        console.log(this.nome + ' Está comendo')
    }
}

const p1 = new Pessoa('Felipe','Carneiro')
console.log(p1.falar())
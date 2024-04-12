class Eletronico{
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado) return

        this.ligado = true
     }
    desligar(){
        if(!this.ligado) return

        this.ligado = false
     }
}

class Celular extends Eletronico{
    constructor(nome,cor){
        super(nome)
        this.cor = cor
    }
}

const c1 = new  Celular('Poco','Preto')
c1.ligar()
console.log(c1)
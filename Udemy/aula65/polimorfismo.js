// Superclasse
function Conta(ag,conta,saldo){
    this.ag = ag
    this.conta = conta
    this.saldo = saldo
}


Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('Saldo insuficiente!')
        this.verSaldo()
        return
    }

    this.saldo -= valor
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.ag}/${this.conta} ` +
    `Saldo: ${this.saldo.toFixed(2)}`)
}

function ContaCorrente(ag,conta,saldo,limite){
    Conta.call(this,ag,conta,saldo)
    this.limite = limite


}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo insuficiente: ' + this.saldo)
        return
    }
    this.saldo -= valor
    this.verSaldo();
}

function ContaPoupanca(ag,conta,saldo){
    Conta.call(this,ag,conta,saldo)


}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca


const cc = new ContaCorrente(11234,45612,0,100)
cc.depositar(10)
cc.sacar(200)
console.log(cc)

console.log()

const cp =new ContaPoupanca(12,33,0)
cp.depositar(10)
cp.sacar(20)
console.log(cp)

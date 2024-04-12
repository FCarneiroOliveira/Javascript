export default class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable:false,
            enumerable: true,
            configurable:false,
            value:cpfEnviado.replace(/\D+/g,'')
        })
    }

    geraCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){ // quando um método não possui o this ele pode ser estático
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso --
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? digito : '0'
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.eSequencia()) return false
        this.geraCpf()
        
        return this.novoCpf === this.cpfLimpo

    }
}

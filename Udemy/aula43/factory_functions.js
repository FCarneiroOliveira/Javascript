// Factory Function ( Função Fábrica)
//Constructor Function (Função Construtora)

function criaPessoa(nome,sobrenome,altura,peso){
    return {
        nome,
        sobrenome,
        get nomCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        // Setter - Faz com que o valor de uma função possa mudar 
        set nomCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ') // juntando o que ficou no array e separando com o espaço
        },
        altura,
        peso,
        // Getter - transformar a funcção em um atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Felipe','Carneiro',1.76,75)
console.log(p1.imc)
p1.nomCompleto = 'João Carneiro de Oliveira' // usando o setter 
console.log(p1.nomCompleto)

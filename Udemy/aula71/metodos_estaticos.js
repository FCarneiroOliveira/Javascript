class Controle{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    aumenta(){
        this.volume += 2
    }
    diminui(){
        this.volume -= 2
    }
    static infraVermelho(){ // método estático - tem que ser chamado pela classe e não pelo objeto - método random() da classe Math é um exemplo de método estático ----- Métodos estáticos não tem acesso aos dados da classe 
        console.log('Chamou')
    }
}
const c1 = new Controle('LG')
c1.aumenta()
c1.aumenta()
c1.diminui()
Controle.infraVermelho()
console.log(c1)
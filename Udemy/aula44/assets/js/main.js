function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliquebtn()
            this.pressionaEnter()
        },
        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta Inválida')
                    return
                }
                this.display.value = String(conta)
            }catch(e){
                alert('Conta Inválida')
                return
            }
        },
        
        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },


        cliquebtn(){
            document.addEventListener('click', function(e) { // use arrow function aqui
                const ele = e.target
        
                if(ele.classList.contains('btn-num')){
                    this.btnParaDisplay(ele.innerText)
                }
                if(ele.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(ele.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if(ele.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }.bind(this)) // faz a função usar o this do inicia que é a calculadora
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()


function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = () => {
        
        this.capturaCliques()

        this.capturaEnter()
    }

    this.capturaEnter = () =>{
        document.addEventListener('keypress', e => {
            if (e.keyCode ===13 ){
                this.realizaConta()
            }   
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const ele = e.target

            if(ele.classList.contains('btn-num')) this.adicionaDisplay(ele)
            if(ele.classList.contains('btn-clear')) this.clearDisplay()
            if(ele.classList.contains('btn-del')) this.del()
            if(ele.classList.contains('btn-eq')) this.realizaConta()
        })
    }

    this.adicionaDisplay = (ele) =>{
         this.display.value += ele.innerText
         this.display.focus()
    }
    this.clearDisplay = ele => this.display.value = ''

    this.del = () => this.display.value = this.display.value.slice(0, -1)
    
    this.realizaConta = () => {
       try {
       const conta = eval(this.display.value)

        if(!conta) {
            alert('Conta Inválida') 
            return
        }
        this.display.value = conta
       } catch(e){
        alert('Conta Inválida')
        return;
       }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
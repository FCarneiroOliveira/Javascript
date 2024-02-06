const form = document.querySelector('#form');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const ipeso = e.target.querySelector('#peso')
    const ialtura = e.target.querySelector('#altura')

    const peso = Number(ipeso.value)
    const altura = Number(ialtura.value)

    if (!peso){
        res('Peso inválido', false)
        return
    }
    if (!altura){
        res('Altura inválida', false)
        return
    }

    const imc = getImc(peso,altura)
    const catImc = getCatImc(imc)

    const msg = `seu IMC é ${imc} (${catImc}).`

    res(msg,true)
});
function getCatImc (imc){
    const cat = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3',]
    if (imc >= 39.9) return cat[5]

     if(imc >= 34.9) return cat[4]

     if(imc >= 29.9) return cat[3]

     if(imc >= 24.9) return cat[2]

     if(imc >= 18.5) return cat[1]

     if( imc < 18.5) return cat[0]

}
function getImc(peso,altura){
    const imc = peso / (altura ** 2)
    return imc.toFixed(2)
}
function criaP(){
    const p = document.createElement('p')
    return p
}
function res (msg, isValid){
    
    const resu = document.querySelector('#resultado')
    resu.innerHTML = ''

    const p = criaP();

    if(isValid) {
        p.classList.add('presu')
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resu.appendChild(p)
    
   
        
}

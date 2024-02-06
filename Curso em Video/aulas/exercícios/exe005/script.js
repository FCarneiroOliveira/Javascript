let num = document.getElementById('n1')
let l = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adc(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        l.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já adicionado!')
    }
    num.value = ''
    num.focus()
}
function finish(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.`
        res.innerHTML += `<p>O maior valor é ${maior}.`
        res.innerHTML += `<p>O menor valor é ${menor}.`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.`
        res.innerHTML += `<p>A média dos valores é ${media}.`
    }
}
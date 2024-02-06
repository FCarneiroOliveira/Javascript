function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados!')
    } else{
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
        c = i
        if(p <= 0){
            window.alert('Passo Inválido.Considerando passo 1')
            p = 1
        }
      if(i < f){
        while(c <= f){
        res.innerHTML += ` ${c} \u{1F449}`
        c += p
       }} else{
        for( c = i;c >= f;c -= p)
        res.innerHTML += ` ${c} \u{1F449}`
       }
       res.innerHTML += `\u{1F3C1}`
    }
}

function limpar(){
    res = document.getElementById('res')
    res.innerHTML = ''
}
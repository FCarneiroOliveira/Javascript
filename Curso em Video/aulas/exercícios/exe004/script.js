function calcular(){
    var n = document.getElementById('numero')
    var tab = document.getElementById('tab')
    if(n.value.length == 0){
        window.alert('Digite um número!')
    }else{
        var n = Number(n.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            var r = document.createElement('option')
            r.text = `${n}x${c} = ${n*c}`
            r.value = `tab${c}`
            tab.appendChild(r)
        }   
    }
}
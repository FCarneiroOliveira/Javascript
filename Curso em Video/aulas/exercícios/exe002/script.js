function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var idaden = document.getElementById('idaden')
    var res = document.getElementById('res')

    if (idaden.value.length == 0 || idaden.value > ano){
        window.alert('ERRO - Verifique o ano digitado!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(idaden.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if ( idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src','img/bebe.jpg')
            } else if(idade < 10){
                //criança
                img.setAttribute('src','img/menino.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/moco.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src','img/homem.jpg')
            }else{
                //idoso
                img.setAttribute('src','img/idoso.jpg')
            }
        } else if(sex[1].checked){
            genero = 'Mulher'
            if ( idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src','img/bebe.jpg')
            } else if(idade < 10){
                //criança
                img.setAttribute('src','img/menina.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/moca.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src','img/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src','img/idosa.jpg')
            }
        }
        res.innerHTML = `${genero} de ${idade} anos`
        res.appendChild(img)
    }
}
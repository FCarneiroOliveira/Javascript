
function carregar() {
    var hr = document.getElementById('h')
    var img = document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20

   
    if(hora >= 0 && hora < 12){
        hr.innerText = `Bom Dia! Agora são exatamente ${hora}h`
        img.src = '../manhã.jpg'
    } else if  (hora >= 12 && hora <= 18){
        hr.innerText = `Boa Tarde! Agora são exatamente ${hora}h`
        img.src = '../tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        hr.innerText = `Boa Noite! Agora são exatamente ${hora}h`
        img.src = '../noite.jpg'
        document.body.style.background = 'rgba(4, 4, 101, 0.66)'
    }
}
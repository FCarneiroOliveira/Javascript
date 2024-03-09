function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR')
}

// function interval(){
//     console.log(mostraHora())
// }
const time = setInterval(function(){
    console.log(mostraHora())
},1000)

setTimeout(function(){
    clearInterval(time)
},3000)

setTimeout(function(){
 console.log('olá Mundo!')
},5000)
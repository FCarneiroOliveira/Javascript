function espera(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value')
        setTimeout(() => {
            resolve(msg)
        }, tempo)

    })
}


function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

espera('Frase 1',aleatorio(1,3)).then(resposta => {
    console.log(resposta)
    return espera(333,aleatorio(1,3)).then(resposta =>{
        console.log(resposta)
    })
}).catch(e =>{
    console.log('ERRO:',e)
})

console.log('Exibido Primeiro que qualquer promise')
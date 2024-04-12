function espera(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
             reject(false)
             return
        }
        setTimeout(() => {
            resolve(msg + ' - Passei na promise')
        }, tempo)

    })
}


function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function baixaPagina(){
    const emCache = true
    if(emCache){
        return Promise.reject('Página em cache')
    }else{
        return espera('Baixei a página',3000)
    }
}

// Promise.all - Promise.race - Promise.resolve - Promise.reject

const promises = [
    espera('Promise 1',3000),
    espera('Promise 2',500),
    espera('Promise 3',1000),
    espera(1111,2000)
]

Promise.race(promises).then(function(valor){ // resolve todas as promises e retornar o valor delas
    console.log(valor)
}).catch( e =>{
    console.log('ERRO:',e)
})

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina)
})
.catch(e => console.log('ERRO',e))
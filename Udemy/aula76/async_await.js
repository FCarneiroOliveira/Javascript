function espera(msg, tempo) {

    return new Promise((resolve, reject) => {
      
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject(false)
                return
            }

            resolve(msg + ' - Passei na promise')
            return

        }, tempo)

    })
}


function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

async function executa(){
    try{
  const fase1 = espera('Fase 1',aleatorio(0,3))
  console.log(fase1) // promisse pendente
  const fase2 = await espera(2,aleatorio(0,3)) // fullfiled - completada
  console.log(fase2)
  const fase3 = await espera('Fase 3',aleatorio(0,3))
  console.log(fase3)
    }catch(e){
        console.log(e)
    }
}
executa()
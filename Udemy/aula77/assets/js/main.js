// const request = obj => {

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(obj.method, obj.url, true)
//         xhr.send()


//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText)
//             }

//         })
//     })

// }

document.addEventListener('click', e => {
    const ele = e.target
    const tag = ele.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(ele)
    }
})

async function carregaPagina(ele) {
    try{
        const href = ele.getAttribute('href')
        const response = await  fetch(href)
        const html = await response.text()
        carregaResultado(html)
    }catch(e){
        console.log(e)
    }
    
    // try {
        // const response = await request({
        //     method: 'GET',
        //     url: href
        // })

        // fetch(href).then(response => {
        //     return response.text()
        // })
        // .then(html => {
        //     carregaResultado(html)
        // }).catch(e => console.warn(e))
      
    // } catch (e) {
    //     console.log(e)
    // }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}



fetch('pagina1.html').then(resposta => {
    if(resposta.status !== 200) throw new Error('ERRO 404')
    return resposta.text()
}).then(html => console.log(html))
.catch(e => console.warn(e))
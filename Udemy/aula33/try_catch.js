// try{
//     console.log(naoExisto)
// } catch(erro){
//     console.log('naoExisto não existe')
//     console.log(erro)
// }

function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X ou Y precisam ser números!!')
    }
    return x + y
}
try{
    console.log(soma(2,'1'))
}catch(e){
    //console.log(e)
    console.log('Não lance o erro para o usuário!')
}

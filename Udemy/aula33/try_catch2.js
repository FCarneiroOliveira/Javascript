// try{ // executa quando não há erros
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e deu erro')
//     console.log('Fechei o arquivo')
    
//    try{
//     console.log(b);
//    }catch(e){
//     console.log('Deu erro!!')
//    }finally{

//    }
// }catch(e){ // executa quando há erros
//     console.log('Tratando o erro')
   
// } finally{// executa sempre, não importa se o erro aconteceu ou não.
//     console.log('Fechei o arquivo')
// }

function retHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour12: true // faz a hora de 12 em 12 adicionando PM ou AM
    });
}
try{
    const data = new Date('01-01-1970')
    const hora = retHora(1);
    console.log(hora)
}catch(e){
    console.log(e)
}finally{
    console.log('Bom dia!!')
}

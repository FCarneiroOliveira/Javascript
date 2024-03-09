const numeros = [0,1,2,3,4,5,6]

for( let i in numeros){
    let  num = numeros[i];
    if( num === 2){
        continue; // pula pra próxima 
    }
    
    if ( num === 4){
        break; // quebra a iteração 
    }
    console.log(num)
}
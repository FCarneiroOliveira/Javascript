function* geradora1(){ // laze evalution - nunca entrega todos os valores 
   // Finge que tem código aqui(exemplo)
    yield 'Valor 1';
   // Finge que tem código aqui(exemplo)
    yield 'Valor 2';
   // Finge que tem código aqui(exemplo)
    yield 'Valor 3';
}
// const g1 = geradora1()
// console.log(g1.next().value)  // precisa usar .next() para retornar o valor
// console.log(g1.next().value)  // precisa usar .next() para retornar o valor
// console.log(g1.next().value)  // precisa usar .next() para retornar o valor
// console.log(g1.next())  // precisa usar .next() para retornar o valor

// for(let valor of g1){
//     console.log(valor)
// 

function* geradora2(){
    let i = 0
    while(true){ // infinito 
        yield i
        i++
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3()
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4()

function* geradora5(){
    yield function(){
        console.log('Vim do y1')
    }

    return function(){
        console.log('Vim do return') // se usar return ele retorna e para a função geradora, oque estiver abaixo do return não vai retornar
    }
    //......

    yield function(){
        console.log('Vim do y2')
    }
}



const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()
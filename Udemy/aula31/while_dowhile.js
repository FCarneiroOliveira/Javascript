function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
// let rand = random(0, 50)

// while (rand !== 10){
//     rand = random(1, 50)
//     console.log(rand)
// }
do{  // executa pimeiro depois verifica
    rand = random(1,50)
    console.log(rand)
}while(rand !== 10)
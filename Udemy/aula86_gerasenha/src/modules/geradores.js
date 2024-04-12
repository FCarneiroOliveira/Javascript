const rand = (min,max) =>Math.floor(Math.random() * (max - min) + min)

const geraMaiu = () => String.fromCharCode(rand(65,91))

const geraMinu = () => String.fromCharCode(rand(97,123))

const geraNum = () => String.fromCharCode(rand(48,58))

const simbols = ',.;-^+=_[]{}&%$#@!'

const geraSim = () => simbols[rand(0,simbols.length)]


export default function geraSenha(qtd,maiu,minu,num,sim){
    const senhaArray = []
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++){
        maiu && senhaArray.push(geraMaiu())
        minu && senhaArray.push(geraMinu())
        num && senhaArray.push(geraNum())
        sim && senhaArray.push(geraSim())
    }
    return senhaArray.join('').slice(0,qtd)
}




const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()
// C     R    U      D
// POST  GET  PUT  DELETE

// /pag/?chave1=valor&chave2=valor2&chave3=valor3
app.use(express.urlencoded({extended: true}))
app.set('views',path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')
app.use(routes)

app.get('/testes/:idUsuarios?/:parametro?', (req,res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)

})


app.get('/contato', (req,res) =>{
    res.send('Obrigado por entrar em contato!')
})
app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session') // Importe o 'session' aqui
const flash = require('connect-flash')
const MongoStore = require('connect-mongo')

const sessionOptions = session({
    secret: 'asdjhwehf12376tiasjdk987897319sjda910',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING,
        ttl: 7 * 24 * 60 * 60 // tempo de vida da sessão em segundos (7 dias)
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // tempo de vida do cookie em milissegundos (7 dias)
        httpOnly: true
    }
})

// C     R    U      D
// POST  GET  PUT  DELETE

// /pag/?chave1=valor&chave2=valor2&chave3=valor3
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname,'public')))

app.use(sessionOptions)
app.use(flash())

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

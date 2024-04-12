const express = require('express')

const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// function meuMiddleware(req,res,next) {
//  req.session = {nome:'Felipe',sobrenome:'Carneiro'}   
//  console.log()
//  console.log('Passei no middleware')
//  console.log()
//  next()
// }

//rotas da home
// route.get('/',meuMiddleware, homeController.paginaInicial,function(req,res,next){
//     console.log()
//     console.log('Ainda estou aqui')
//     console.log(`Último middleware: e posso ver o req.session.nome também: ${req.session.nome}`)
// })
route.get('/',homeController.paginaInicial)
route.post('/',homeController.trataPost)

// rotas de contato
route.get('/contato',contatoController.paginaInicial)

module.exports = route
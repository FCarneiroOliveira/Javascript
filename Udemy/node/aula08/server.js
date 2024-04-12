const express = require('express')

const app = express()
// C     R    U      D
// POST  GET  PUT  DELETE

// /pag/?chave1=valor&chave2=valor2&chave3=valor3
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res) => {
    res.send(`
        <form action= "/" method ="POST">
    Nome Completo:<input name="nome" type = "text">
    <button>Enviar</button>
        </form>
        
    `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req,res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)

})

app.post('/',(req,res) =>{
    console.log(req.body)
    res.send(`Oque vc me enviou foi: ${req.body.nome}`)
})
app.get('/contato', (req,res) =>{
    res.send('Obrigado por entrar em contato!')
})
app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
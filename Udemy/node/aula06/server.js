const express = require('express')

const app = express()
// C     R    U      D
// POST  GET  PUT  DELETE
// http://meusite.com/ <- GET -> Entregue a Página
// http://meusite.com/sobre <- GET -> Entregue a Página /sobre


app.get('/',(req,res) => {
    res.send(`
        <form action= "/" method ="POST">
    Nome: <input name="nome" type = "text">
    <button>Enviar</button>
        </form>
        
    `)
})

app.post('/',(req,res) =>{
    res.send('Recebi o formulário')
})
app.get('/contato', (req,res) =>{
    res.send('Obrigado por entrar em contato!')
})
app.listen(3000,()=>{
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
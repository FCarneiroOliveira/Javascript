exports.paginaInicial = (req,res) =>{
    res.render('index')
    // console.log(`Olha oque tem na req.session.nome: ${req.session.nome}`)
    return
}

exports.trataPost = (req,res) =>{
    res.send(req.body)
    return
}
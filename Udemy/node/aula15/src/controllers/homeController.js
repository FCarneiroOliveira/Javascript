const HomeModel = require('../models/HomeModel')

// HomeModel.create({ Envia os dados para o BD usando o model
//     titulo: 'Mais uma coisa',
//     descricao: 'Outra descrição de teste'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e))

// HomeModel.find() para pegar os dados e mostrei no console
// .then(dados => console.log(dados))
// .catch(e => console.log(e))

exports.paginaInicial = (req,res) =>{
    console.log(req.flash('error'),req.flash('success'),req.flash('info'))
    console.log(req.session.usuario)
    res.render('index')
}

exports.trataPost = (req,res) =>{
    res.send('Ei,sou sua nova rota de POST')
}
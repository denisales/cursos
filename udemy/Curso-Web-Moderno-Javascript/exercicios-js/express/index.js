const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!');

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao('Denis'))




// use, all qualquer tipo de requisicao
// app.use('/opa', (req, res) => {
//     res.send('Estou <b>bem</b>')
// })
app.use((req, res, next) => {
    console.log("Antes...")
    next()
})


app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})


app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })

    res.send(req.body)
})



app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})






app.get('/opa', (req, res, next) => {
    // res.send('Estou <b>bem</b>')
    console.log("Durante...")
   res.json([
       {name: "teste", posicao: 1},
       {name: "teste2", posicao: 2},
   ])

   next()
    // res.json({
    //     name: "teste",
    //     preco: 33.45
    // })
})
app.use((req, res) => {
    console.log("Depois")
})



app.listen(3000, () => {
    console.log("backend executando 2")
});
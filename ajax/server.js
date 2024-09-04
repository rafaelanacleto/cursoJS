const bodyParser = require('body-parser')
const express = require('express')
const multer = require("multer") //interpretar formulario
// const axios = require('axios').default;
const app = express()

app.use(express.static('.')) //dentro da pasta atual, sirva os arquivos staticos
app.use(bodyParser.urlencoded({ extended: true})) //
app.use(bodyParser.json()) //se vier um json dentro do corpo da requisao

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end("Ocorreu um erro.")
        }
        res.end("Concluido com Sucesso!")
    })
})

app.post('/formulario', (req, res) => {    
    res.send({
        ...req.body,
        id: 1
    }) 
})

app.get('/teste', (req, res) => res.send({
    id: 1,
    nome: 'rafael',
    idade: 40
}))

app.listen(8080, () => console.log("Executando.."))
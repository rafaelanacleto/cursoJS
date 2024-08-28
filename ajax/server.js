const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.')) //dentro da pasta atual, sirva os arquivos staticos
app.use(bodyParser.urlencoded({ extended: true})) //
app.use(bodyParser.json()) //se vier um json dentro do corpo da requisao

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log("Executando.."))
